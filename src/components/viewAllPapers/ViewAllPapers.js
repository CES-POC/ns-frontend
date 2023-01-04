import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineOpenInFull } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/scss/ViewAllPapers/ViewAllPapers.scss";
import * as types from "../../redux/actionsTypes/actionTypes";

const ViewAllPapers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: types.FETCH_PAPER_START });
  }, []);

  const papersAll = useSelector((state) => state.paper.papers);
  return (
    <div className="row allPaper-mainDiv">
      {papersAll &&
        papersAll.map((item) => (
          <div className="col mt-3 col-sm-1 col-md-3 col-xl-3" key={item.name}>
            <div className="card">
              <img
                src={item.image}
                className="floor_image card-img-top"
                alt="card-image"
              />
              <div className="card-body">
                <Link to={`/paper/${item._id}`}>
                  <button type="button" className="btn">
                    <MdOutlineOpenInFull />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ViewAllPapers;
