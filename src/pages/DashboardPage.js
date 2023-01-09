import React, { useState, useEffect } from 'react';
import '../assets/scss/DashboardPage/DashboardPage.scss';
import customer from '../assets/img/customer.svg';
import systems from '../assets/img/systems.svg';
import loadAnalysis from '../assets/img/loadAnalysis.svg';
import drawings from '../assets/img/drawings.svg';
import scope from '../assets/img/scope.svg';
import axios from 'axios';

const DashboardPage = () => {
  const [data, setData] = useState([]);
  // const [customers, setCustomers] = useState([]);
  // const [sysytems, setSystems] = useState([]);
  // const [selectCustomers, setSelectCustomers] = useState([]);
  // const [selectLocation, setSelectLocation] = useState([]);
  // const [selectSystem, setSelectSystem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const urlData = await axios.get('');
      // console.log(urlData.data);
      // setData(urlData.data);
    };
    fetchData();
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row outer-container p-3'>
        <div className='col-12 mt-3 d-flex flex-wrap justify-content-around '>
          <div className='card system__card'>
            <div className='card-body d-flex flex-column justify-content-center align-items-start flex-wrap align-content-start'>
              <div className='card-title d-flex '>
                <img src={customer} alt='customer.svg' />
                <div className='card_value px-2'>234</div>
              </div>
              <p className='card-text text-start fw-semibold'>No.of Customers</p>
            </div>
          </div>
          <div className='card system__card'>
            <div className='card-body d-flex flex-column justify-content-center align-items-start flex-wrap align-content-start'>
              <div className='card-title d-flex '>
                <img src={systems} alt='systems.svg' />
                <div className='card_value px-2'>234</div>
              </div>
              <p className='card-text text-start fw-semibold'>No.of Systems</p>
            </div>
          </div>
          <div className='card system__card'>
            <div className='card-body d-flex flex-column justify-content-center align-items-start flex-wrap align-content-start'>
              <div className='card-title d-flex '>
                <img src={loadAnalysis} alt='loadAnalysis.svg' />
                <div className='card_value px-2'>234</div>
              </div>
              <p className='card-text text-start fw-semibold'>Load Analysis</p>
            </div>
          </div>
          <div className='card system__card'>
            <div className='card-body d-flex flex-column justify-content-center align-items-start flex-wrap align-content-start'>
              <div className='card-title d-flex '>
                <img src={drawings} alt='drawings.svg' />
                <div className='card_value px-2'>234</div>
              </div>
              <p className='card-text text-start fw-semibold'>No.of Drawings</p>
            </div>
          </div>
          <div className='card system__card'>
            <div className='card-body d-flex flex-column justify-content-center align-items-start flex-wrap align-content-start'>
              <div className='card-title d-flex '>
                <img src={scope} alt='scope.svg' />
                <div className='card_value px-2'>234</div>
              </div>
              <p className='card-text text-start fw-semibold'>Scope of Work</p>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='row mt-3 mb-3 ms-2 me-2 select_values'>
            <div className='col select_input mt-3 mb-3 mx-0'>
              <label className='form-label' id='exampleFormControlInput1'>
                Select Customer
              </label>
              <select
                className='form-select form-select-sm p-2'
                aria-label='.form-select-sm example'
              >
                <option value='0'>Select Customer</option>
                <option value='1'>Smith Care</option>
                <option value='2'>ColdField</option>
              </select>
            </div>
            <div className='col select_input mt-3 mb-3 mx-0'>
              <label className='form-label' id='exampleFormControlInput1'>
                Select Location
              </label>
              <select
                className='form-select form-select-sm p-2'
                aria-label='.form-select-sm example'
              >
                <option value='0'>Select Location</option>
                <option value='1'>Austin</option>
                <option value='2'>Houston</option>
              </select>
            </div>
            <div className='col select_input mt-3 mb-3 mx-0'>
              <label className='form-label' id='exampleFormControlInput1'>
                Select System
              </label>
              <select
                className='form-select form-select-sm p-2'
                aria-label='.form-select-sm example'
              >
                <option value='0'>System_1</option>
                <option value='1'>System_2</option>
                <option value='2'>System_3</option>
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col search__field d-flex align-items-center '>
              <i className='bi bi-search search__icon ms-3'></i>
              <input
                type='text'
                className='input__search w-100'
                placeholder='Search Files and Templates'
              />
            </div>
            <div className='col'>
              <button type='button' className='btn button float-end'>
                <span className='button_content'>Add New Drawing<i className='bi bi-plus plus_icon p-0 m-0'></i></span>
              </button>
            </div>
          </div>
          {data.length != 0 ? (
            data.map((item) => {
              return (
              <div className='row data'></div>
              );
            })
          ) : (
            <div className='row no_data'>
              <img src='/assets/nodata.svg' className='mx-auto' alt='Nodata.svg' />
              <p className='text-center fw-bold'>Select customer and plant to show data</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
