import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";
import { toast } from "react-toastify";
export async function deleteUserAction() {
  //delete the user
  deleteItem({key: "userName"});
  deleteItem({key: "budgets"});
  deleteItem({key: "expenses"});
  toast.warning("You've deleted your account successfully!")
  //return redirect
  return redirect("/");
}