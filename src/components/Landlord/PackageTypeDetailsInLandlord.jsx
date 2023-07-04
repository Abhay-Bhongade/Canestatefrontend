import React from 'react'

const PackageTypeDetailsInLandlord = () => {
  return (
    <div>
         <div className="card border-0" style={{ width: "32rem" }}>
            <h3 className="mt-3 mb-5 headingcombine">Package Type</h3>
            <div className="mt-3">
              <div className="row">
                <div className="col-sm-6 package-card-pink">
                  
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div class="wrapper-inner land-swich">
                <div class="form-group">
                  <div class="radio">
                    <label>
                      <input
                        type="radio"
                        name="radio-input"
                        checked="checked"
                        className="custom-control-input"
                        id="checkbox"
                      />{" "}
                      Cash
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="radio">
                    <label>
                      <input type="radio" name="radio-input" className="m-0" />{" "}
                      Card
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="radio">
                    <label>
                      <input type="radio" name="radio-input" className="m-0" />{" "}
                      Online
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div> 
    </div>
  )
}

export default PackageTypeDetailsInLandlord