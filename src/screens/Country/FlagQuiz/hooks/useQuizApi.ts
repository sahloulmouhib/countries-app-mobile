import { useEffect, useState } from 'react';
import { HttpMethod } from '_enums/global';
import { useAsyncApi } from '_hooks/useAsyncApi';
import { makeEventNotifier } from '_hooks/useEventListener';
import { decodeQuiz, Quiz, QuizResponse } from '_models/Quiz';
import { useAppDispatch } from '_store/hooks';
import { endpoints } from '_utils/endpoints';
import { hideLoader, showLoader } from '_utils/helpers';
import { handleError, handleErrorPopUp } from '_utils/network';
import { AnswerToQuestion } from './useQuiz';

export enum TechnicalSupportType {
  Pdf = 1,
  Video = 2,
}

export type QuizToSubmit = {
  score: number;
  answerToQuestions: AnswerToQuestion[];
  quizId: number;
};

//EventListener to update score in video adn pdf screen
const notifier = makeEventNotifier<{
  technicalId: number;
  type: TechnicalSupportType;
  score: number;
  totalQuestionsNumber: number;
}>('OnQuizCompleted');
export function useOnQuizCompletedListener(
  listener: typeof notifier.notify,
  deps: ReadonlyArray<any>,
) {
  notifier.useEventListener(listener, deps);
}
//id refers to technical support id (pdf or video id)
function useQuizApi(type: TechnicalSupportType, id: number) {
  const dispatch = useAppDispatch();
  const endpointGetQuiz =
    type === TechnicalSupportType.Pdf
      ? endpoints.GET_QUIZ_PDF
      : endpoints.GET_QUIZ_VIDEO;
  const endpointSubmitQuiz =
    type === TechnicalSupportType.Pdf
      ? endpoints.SUBMIT_QUIZ_PDF
      : endpoints.SUBMIT_QUIZ_VIDEO;

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [failedError, setFailedError] = useState<string | undefined>(undefined);

  const getQuizApi = useAsyncApi<QuizResponse, Quiz>();
  const submitQuizApi = useAsyncApi();

  const getQuiz = async () => {
    setIsLoading(true);
    setFailedError(undefined);
    try {
      const result = await getQuizApi.apiCallAsync({
        url: `${endpointGetQuiz}/${id}`,
        method: HttpMethod.Get,
        decodeData: decodeQuiz,
        useToken: true,
        useDataWrapper: true,
      });
      setQuiz(result);
    } catch (error) {
      setFailedError(handleError(error));
    } finally {
      setIsLoading(false);
    }
  };

  const submitQuiz = async (
    quizToSubmit: QuizToSubmit,
    setIsQuizFinished: (bool: boolean) => void,
  ) => {
    showLoader(dispatch, { whiteBackGround: true, isGlobal: false });
    setFailedError(undefined);
    try {
      await submitQuizApi.apiCallAsync({
        url: endpointSubmitQuiz,
        method: HttpMethod.Post,
        payload: quizToSubmit,
        decodeData: value => value,
        useToken: true,
      });
      notifier.notify({
        technicalId: id,
        type: type,
        score: quizToSubmit.score,
        totalQuestionsNumber: quizToSubmit.answerToQuestions.length,
      });
      setIsQuizFinished(true);
    } catch (error) {
      handleErrorPopUp(error, false);
    } finally {
      hideLoader(dispatch);
    }
  };

  useEffect(() => {
    getQuiz();
  }, [id]);
  return {
    isLoading,
    failedError,
    getQuiz,
    quiz,
    submitQuiz,
  };
}

export default useQuizApi;
