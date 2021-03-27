import React, { useState, useRef, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ToolsandEquipment = () => {
  const [formState, setformState] = useState({});
  const [inputFields, setInputFields] = useState([
    { tool_description: "", qty: "", remark: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ tool_description: "", qty: "", remark: "" });
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
    if (event.target.name === "tool_description") {
      values[index].tool_description = event.target.value;
    } else if (event.target.name === "qty") {
      values[index].qty = event.target.value;
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
          <legend> TOOLS AND EQUIPMENT DECLARATION FORM</legend>
          <div>PARTICULARS OF REQUESTOR</div>
          <table>
            <tr>
              <th>
                <div className="form-group">
                  <label htmlFor="name">Name: </label>
                  <div>
                    <input
                      id="name"
                      name="name"
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
              <th>
                <div className="form-group">
                  <label htmlFor="work_location">Location of work:</label>
                  <div>
                    <input
                      id="work_location"
                      name="work_location"
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
                  <label htmlFor="vehicleregistration_no">Vehicle no:</label>
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
            </tr>

            <tr>
              <th>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <div>
                    <input
                      id="date"
                      name="date"
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
                  <label htmlFor="time">Time</label>
                  <div>
                    <input
                      id="time"
                      name="time"
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
                  <label htmlFor="gate">Gate</label>
                  <div>
                    <input
                      id="gate"
                      name="gate"
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
                    <label htmlFor="tool_description">Item</label>
                    <input
                      type="text"
                      className="form-control input-md"
                      id="tool_description"
                      name="tool_description"
                      value={inputField.tool_description}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <label htmlFor="qty">Qty</label>
                    <input
                      type="text"
                      className="form-control input-md"
                      id="qty"
                      name="qty"
                      value={inputField.qty}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <label htmlFor="remark">Remark/Ser.No</label>
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
                <label htmlFor="icNo">IC No</label>
                <div>
                  <input
                    id="icNo"
                    name="icNo"
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
            <th>
              <div className="form-group">
                <label htmlFor="issue_time">Time:</label>
                <div>
                  <input
                    id="issue_time"
                    name="issue_time"
                    type="time"
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
            <th>
              <div className="form-group">
                <label htmlFor="timeOfApprove">Time:</label>
                <div>
                  <input
                    id="timeOfApprove"
                    name="timeOfApprove"
                    type="time"
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

export default ToolsandEquipment;
