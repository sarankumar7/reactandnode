import React, { useState, useRef, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const VehicleEntry = () => {
  const [formState, setformState] = useState({});
  const [inputFields, setInputFields] = useState([
    { personnelName: "", idNo: "", remark: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ personnelName: "", idNo: "", remark: "" });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const filedonChange = (event) => {
    // use a callback to find the field in the value list and update it
    setformState((currentValues) => {
      currentValues[event.target.name] = event.target.value;
      return currentValues;
    });
    console.log(formState);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "personnelName") {
      values[index].personnelName = event.target.value;
    } else if (event.target.name === "idNo") {
      values[index].idNo = event.target.value;
    } else {
      values[index].remark = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFields", e);
    setTimeout(() => {
      document.getElementById("myfrm").reset();
      setformState({});
      console.log(formState, inputFields);
    }, 3000);
  };
  const printForm = (myfrm) => {
    var content = document.getElementById("myfrm");
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  };

  return (
    <div
      style={{
        backgroundColor: "#DCDEE3",
        border: "5px solid #fff",
        marginLeft: "5px",
      }}
    >
      <iframe
        id="ifmcontentstoprint"
        style={{ height: " 0px", width: "0px", position: "absolute" }}
      ></iframe>
      <form className="form-horizontal" id="myfrm" onSubmit={handleSubmit}>
        <fieldset>
        <legend>  PERSONNEL AND VEHICLE ENTRY PERMIT</legend>
          <div> PURPOSE OF ENTRY</div>
          <table>
            <tr>
              <th>
                <div className="form-group">
                  <label htmlFor="purpose">Purpose: </label>
                  <div>
                    <input
                      id="purpose"
                      name="purpose"
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                      onChange={filedonChange}
                      required=""
                    />
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <div className="form-group">
                <label htmlFor=" supplierCompanyname">
                  Supplier Company name:
                </label>
                <div>
                  <input
                    id="supplierCompanyname"
                    name="supplierCompanyname"
                    type="text"
                    placeholder=""
                    className="form-control input-md"
                    onChange={filedonChange}
                    required=""
                  />
                </div>
              </div>
            </tr>
            <tr>
              <th>
                <div className="form-group">
                  <label htmlFor="vehicleregistration_no">
                    Vehicle registration no:
                  </label>
                  <div>
                    <input
                      id="vehicleregistration_no"
                      name="vehicleregistration_no"
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                      onChange={filedonChange}
                      required=""
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="form-group">
                  <label htmlFor="Plant">Plant :</label>
                  <div>
                    <select
                      name="Plant"
                      id="Plant"
                      className="form-control input-md"
                      onChange={filedonChange}
                      required=""
                    >
                      <option value="FIZ">FIZ</option>
                      <option value="LMW">LMW</option>
                    </select>
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th>
                <div className="form-group">
                  <label htmlFor="DateofArrival">Arrival Date</label>
                  <div>
                    <input
                      id="DateofArrival"
                      name="DateofArrival"
                      type="date"
                      placeholder=""
                      className="form-control input-md"
                      onChange={filedonChange}
                      required=""
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="form-group">
                  <label htmlFor="timeofArrival">Arrival Time</label>
                  <div>
                    <input
                      id="timeofArrival"
                      name="timeofArrival"
                      type="time"
                      placeholder=""
                      className="form-control input-md"
                      onChange={filedonChange}
                      required=""
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="form-group">
                  <label htmlFor="arrivalGate">Gate/Post</label>
                  <div>
                    <input
                      id="arrivalGate"
                      name="arrivalGate"
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                      onChange={filedonChange}
                      required=""
                    />
                  </div>
                </div>
              </th>
            </tr>
          </table>

          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <tr>
                <th>
                  <div>
                    <label htmlFor="personnelName">Item</label>
                    <input
                      type="text"
                      className="form-control input-md"
                      id="personnelName"
                      name="personnelName"
                      value={inputField.personnelName}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <label htmlFor="idNo">Qty</label>
                    <input
                      type="text"
                      className="form-control input-md"
                      id="idNo"
                      name="idNo"
                      value={inputField.idNo}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <label htmlFor="remark">Remark</label>
                    <input
                      type="text"
                      className="form-control input-md"
                      id="remark"
                      name="remark"
                      value={inputField.remark}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => handleAddFields()}
                    >
                      Add Row
                    </button>
                    {index != 0 && (
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() => handleRemoveFields(index)}
                      >
                        Delete Row
                      </button>
                    )}
                  </div>
                </th>
              </tr>
            </Fragment>
          ))}

          <legend> Issuance Details</legend>
          <tr>
            <th>
              <div className="form-group">
                <label htmlFor="signatureOfIssue">Signature:</label>
                <div>
                  <input
                    id="signatureOfIssue"
                    name="signatureOfIssue"
                    type="text"
                    placeholder=""
                    className="form-control input-md"
                    onChange={filedonChange}
                    required=""
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="form-group">
                <label htmlFor="issueBy">Issued by:</label>
                <div>
                  <input
                    id="issueBy"
                    name="issueBy"
                    type="text"
                    placeholder=""
                    className="form-control input-md"
                    onChange={filedonChange}
                    required=""
                  />
                </div>
              </div>
            </th>

            <th>
              <div className="form-group">
                <label htmlFor="issue_department">Department</label>
                <div>
                  <input
                    id="issue_department"
                    name="issue_department"
                    type="text"
                    placeholder=""
                    className="form-control input-md"
                    onChange={filedonChange}
                    required=""
                  />
                </div>
              </div>
            </th>

            <th>
              <div className="form-group">
                <label htmlFor="issue_Date">Date:</label>
                <div>
                  <input
                    id="issue_Date"
                    name="issue_Date"
                    type="date"
                    placeholder=""
                    className="form-control input-md"
                    onChange={filedonChange}
                    required=""
                  />
                </div>
              </div>
            </th>
          </tr>

          <legend> Approver Detail</legend>
          <tr>
            <th>
              <div className="form-group">
                <label htmlFor="signatureOfApprover">Signature:</label>
                <div>
                  <input
                    id="signatureOfApprover"
                    name="signatureOfApprover"
                    type="text"
                    placeholder=""
                    className="form-control input-md"
                    onChange={filedonChange}
                    required=""
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="form-group">
                <label htmlFor="approvedBy">Approved by:</label>
                <div>
                  <input
                    id="approvedBy"
                    name="approvedBy"
                    type="text"
                    placeholder=""
                    className="form-control input-md"
                    onChange={filedonChange}
                    required=""
                  />
                </div>
              </div>
            </th>

            <th>
              <div className="form-group">
                <label htmlFor="approverDepartment">Department:</label>
                <div>
                  <input
                    id="approverDepartment"
                    name="approverDepartment"
                    type="text"
                    placeholder=""
                    className="form-control input-md"
                    onChange={filedonChange}
                    required=""
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="form-group">
                <label htmlFor="dateOfApprove">Date:</label>
                <div>
                  <input
                    id="dateOfApprove"
                    name="dateOfApprove"
                    type="date"
                    placeholder=""
                    className="form-control input-md"
                    onChange={filedonChange}
                    required=""
                  />
                </div>
              </div>
            </th>
          </tr>

          <button className="btn btn-primary md" type="submit">
            Save
          </button>
        </fieldset>
      </form>

      <button onClick={printForm}>Print</button>
    </div>
  );
};

export default VehicleEntry;
