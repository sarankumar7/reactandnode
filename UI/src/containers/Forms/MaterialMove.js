import React, { useState, useRef, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MaterialMovement = () => {
    const [formState, setformState] = useState({});
  const [inputFields, setInputFields] = useState([
    { remark: "", item: "", qty: "" },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ item: "", qty: "", remark: "" });
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
          currentValues[event.target.name]=event.target.value
          return currentValues;
        });
      console.log(formState);

  }

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "item") {
      values[index].item = event.target.value;
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
    setTimeout(()=>{
        document.getElementById("myfrm").reset();
        setformState({})
        console.log(formState);
    },3000)
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
          <legend> MATERIAL MOVEMENT PERMIT </legend>
          <table>
            <tr>
              <th>
                <div className="form-group">
                  <label htmlFor="working_hours">Normal working hours</label>
                  <div>
                    <input
                      id="working_hours"
                      name="working_hours"
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="form-group">
                  <label htmlFor="Offworkinghours  ">
                    Off - working hours{" "}
                  </label>
                  <div>
                    <input
                      id="Offworkinghours  "
                      name="Offworkinghours  "
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="form-group">
                  <label htmlFor="Plant">Plant :</label>
                  <div>
                    <input
                      id="Plant"
                      name="Plant"
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th>
                <div className="form-group">
                  <label htmlFor="  Directmaterials     ">
                    {" "}
                    Direct materials{" "}
                  </label>
                  <div>
                    <input
                      id="  Directmaterials     "
                      name="  Directmaterials     "
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="form-group">
                  <label htmlFor="indirectmaterials">Indirect materials </label>
                  <div>
                    <input
                      id="indirectmaterials"
                      name="indirectmaterials"
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="form-group">
                  <label htmlFor="Destination">Destination:</label>
                  <div>
                    <input
                      id="indirectmaterials"
                      name="indirectmaterials"
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
            </tr>

            <tr>
              <th>
                <div className="form-group">
                  <label htmlFor="Purpose:Maintenance">
                    Purpose: Maintenance
                  </label>
                  <div>
                    <input
                      id="Purpose:Maintenance"
                      name="Purpose:Maintenance"
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="form-group">
                  <label htmlFor=" Modification          ">
                    {" "}
                    Modification{" "}
                  </label>
                  <div>
                    <input
                      id=" Modification          "
                      name=" Modification          "
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="Dispose  ">
                    Dispose{" "}
                  </label>
                  <div>
                    <input
                      id="Dispose  "
                      name="Dispose  "
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="others">
                    Others
                  </label>
                  <div>
                    <input
                      id="others"
                      name="others"
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th>
                <div className="form-group">
                  <label htmlFor="Date">Date</label>
                  <div>
                    <input
                      id="Date"
                      name="Date"
                      type="date"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
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
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="form-group">
                  <label htmlFor="Gate">Gate</label>
                  <div>
                    <input
                      id="Gate"
                      name="Gate"
                      type="text"
                      placeholder=""
                      className="form-control input-md"
                        onChange={filedonChange}  required=""  
                    />
                  </div>
                </div>
              </th>
            </tr>
          </table>
          <div>SUPPLIER DELIVERY DETAILS: </div>
          <tr>
            <th>
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
                      onChange={filedonChange}  required=""  
                  />
                </div>
              </div>
            </th>
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
                      onChange={filedonChange}  required=""  
                  />
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th>
              <div className="form-group">
                <label htmlFor="pic_supplier">PIC (supplier):</label>
                <div>
                  <input
                    id="pic_supplier"
                    name="pic_supplier"
                    type="text"
                    placeholder=""
                    className="form-control input-md"
                      onChange={filedonChange}  required=""  
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="form-group">
                <label htmlFor="id_no">ID no:</label>
                <div>
                  <input
                    id="id_no"
                    name="id_no"
                    type="text"
                    placeholder=""
                    className="form-control input-md"
                      onChange={filedonChange}  required=""  
                  />
                </div>
              </div>
            </th>
            <th>
              <div className="form-group">
                <label htmlFor="Supplier_signature">Supplier signature:</label>
                <div>
                  <input
                    id="Supplier signature"
                    name="Supplier signature"
                    type="text"
                    placeholder=""
                    className="form-control input-md"
                      onChange={filedonChange}  required=""  
                  />
                </div>
              </div>
            </th>
          </tr>
      
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <tr>
                <th>
                  <div>
                    <label htmlFor="item">Item</label>
                    <input
                      type="text"
                      className="form-control input-md"
                      id="item"
                      name="item"
                      value={inputField.item}
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
                    onChange={filedonChange}  required=""  
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
                    onChange={filedonChange}  required=""  
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
                    onChange={filedonChange}  required=""  
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
                    onChange={filedonChange}  required=""  
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
                    onChange={filedonChange}  required=""  
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
                    onChange={filedonChange}  required=""  
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
                    onChange={filedonChange}  required=""  
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
                    onChange={filedonChange}  required=""  
                />
              </div>
            </div>
          </th>
        </tr>

        <button
          className="btn btn-primary md"
          type="submit"
          
        >
          Save
        </button>
        </fieldset>
      </form>

      <button onClick={printForm}>Print</button>
    </div>
  );
};

export default MaterialMovement;
