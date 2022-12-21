import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineOpenInFull } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/scss/ViewAllPapers/ViewAllPapers.scss';
import * as types from '../../redux/actionsTypes/actionTypes';

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
          <div className="col mt-3" key={item.name} sm={1} md={3} xl={3}>
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
