import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";
import MYAllReviewsCol from "./MYAllReviewsCol";

const MYAllReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [Reviews, setReviews] = useState([]);
  console.log(Reviews);

  useEffect(() => {
    fetch(
      `https://service-review-server-weld.vercel.app/addreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut]);
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this Reviews"
    );

    if (proceed) {
      fetch(`https://service-review-server-weld.vercel.app/addreviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            const remaining = Reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  const navigate = useNavigate();
  const handleUpDate = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div>
      <h1 className="flex justify-center text-3xl my-11 font-bold">
        {Reviews.length !== 0 ? "My All Reviews" : "No Reviews were added"}
      </h1>
      <div className="overflow-x-auto w-full">
        {Reviews?.map((rev) => (
          <MYAllReviewsCol
            key={rev._id}
            rev={rev}
            user={user}
            handleDelete={handleDelete}
            handleUpDate={handleUpDate}
          ></MYAllReviewsCol>
        ))}
      </div>
    </div>
  );
};

export default MYAllReviews;
