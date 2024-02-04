import { useDispatch } from "react-redux";
import { inboxActions } from "../store/inboxSlice";
import { sentActions } from "../store/sentSlice";

import fetchMail from "../hooks/useFetch";


const useCheckMails = () => {
  const dispatch = useDispatch();

  const setMailsFn = () => {
    setTimeout(() => {
      const setInbox = async () => {
        const email = localStorage.getItem("email");
        const data = await fetchMail(email, "received");
        dispatch(inboxActions.setInbox(data));
      };
      setInbox();
      const setSent = async () => {
        const email = localStorage.getItem("email");
        const data = await fetchMail(email, "sent");
        dispatch(sentActions.setSent(data));
      };
      setSent();
      setMailsFn();
    }, 2000);
  };
  setMailsFn();
};

export default useCheckMails;
