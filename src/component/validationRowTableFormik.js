import React from 'react'

            {/* ******row table validation (formik)****
akhon thake rowDto state nite hobe na
-----fully implemented (sales-management/ordermanagement/salescontract)---

01) ======initData value === (example)===== */}
const initData = { 
    itemLists: []
  }


  {/* 02 ======validationSchema ==== (example)==== */}
  itemLists: Yup.array().of(
    Yup.object().shape({
      contactQuantity: Yup.number()
        .min(1, "Minimum 1 number")
        .required("Quantity is required"),
      itemPrice: Yup.number()
        .min(1, "Minimum 1 number")
        .required("Price is required"),
    })
  ),


const validationRowTableFormik = () => {
    return (
        <div>
{/* 03 ======= input field ===== (example)=== */}
<InputField
value={values?.itemLists[index]?.itemPrice}
name={`itemLists.${index}.itemPrice`}
placeholder="Price"
type="number"
min="0"
onChange={(e) => {
  setFieldValue(e.target.name, e.target.value);
  setFieldValue(
    `itemLists.${index}.contactValue`,
    e.target.value *
      values?.itemLists[index]?.contactQuantity
  );
}}
/>
<ErrorMessage
name={`itemLists.${index}.itemPrice`}
component="div"
className="invalid-feedback"
/>


{/* 5) ======= add btn click event==== (example)=== */}
setFieldValue("itemLists", [
    ...values?.itemLists,
    { contactQuantity: "", itemPrice: "" },
  ]);


{/* 06) =========delete btn click event==== (example)=== */}
<i
className="fa fa-trash"
onClick={() => {
  let ccdata = values?.itemLists.filter(
    (itm, ind) => ind !== index
  );
  setFieldValue("itemLists", ccdata);
}}
></i>

        </div>
    )
}

export default validationRowTableFormik
