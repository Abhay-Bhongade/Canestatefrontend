import React from "react";

const BankDetailsInLandlord = () => {
  return (
    <div>
      <div className="container bg-white mb-5 ">
        <div className="row">
          <h3 className="address-heading mt-2 mb-3">Bank Details</h3>
          {/* <div className="mt-3">
                <input
                  type="text"
                  className="form-control address-input"
                  placeholder="Enter Full Name"
                />
              </div> */}
          <div className="col-md-6 mt-3  ">
            <input
              type="text"
              className="form-control mini-inputs-rent"
              placeholder="Account Holder Name"
            />
          </div>
          <div className="col-md-6 mt-3  ">
            <input
              type="text"
              className="form-control mini-inputs-rent"
              placeholder="Account Type"
            />
          </div>
          <div className="col-md-6 mt-3  ">
            <input
              type="text"
              className="form-control mini-inputs-rent"
              placeholder="Bank Name"
            />
          </div>
          <div className="col-md-6 mt-3  ">
            <input
              type="text"
              className="form-control mini-inputs-rent"
              placeholder="Bank Number"
            />
          </div>
          <div className="col-md-6 mt-3 mb-4  ">
            <input
              type="text"
              className="form-control mini-inputs-rent"
              placeholder="Transit Number"
            />
          </div>
          <div className="col-md-6 mt-3 mb-4">
            <input
              type="text"
              className="form-control mini-inputs-rent"
              placeholder="Account Number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsInLandlord;
