import axios from "axios";
import { useFormik } from "formik";
import { Config } from "./Config";

import { useNavigate } from "react-router-dom";

function CreateProduct() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      image: "",
      category: "",
      description: "",
      sold: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.title) {
        error.title = "Please enter the Product Title";
      }

      if (!values.price) {
        error.price = "Please enter the Price";
      }

      if (!values.image) {
        error.image = "Please add the image url";
      }

      if (!values.category) {
        error.category = "Please enter the category";
      }

      if (!values.description) {
        error.description = "Please enter the description";
      }
      if (!values.sold) {
        error.sold = "Please enter the sold";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${Config.api}/Products`, values);
        alert("Added Successfully");
        navigate("/addproduct");
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container">
      <div>
        <br /> <br /> <br />
        <h2>Create Products Form</h2>
      </div>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Title*</label>
              <input
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                type={"text"}
                className={`form-control form-control-user ${
                  formik.touched.title && formik.errors.title ? "error-box" : ""
                } ${
                  formik.touched.title && !formik.errors.title
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.title && formik.errors.title ? (
                <span style={{ color: "red" }}>{formik.errors.title}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Price*</label>
              <input
                name="price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
                type={"text"}
                className={`form-control form-control-user ${
                  formik.touched.price && formik.errors.price ? "error-box" : ""
                } ${
                  formik.touched.price && !formik.errors.price
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.price && formik.errors.price ? (
                <span style={{ color: "red" }}>{formik.errors.price}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Product Image*</label>
              <input
                name="image"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
                type={"text"}
                className={`form-control form-control-user ${
                  formik.touched.image && formik.errors.image ? "error-box" : ""
                } ${
                  formik.touched.image && !formik.errors.image
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.image && formik.errors.image ? (
                <span style={{ color: "red" }}>{formik.errors.image}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Category*</label>
              <input
                name="category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
                type={"text"}
                className={`form-control form-control-user ${
                  formik.touched.category && formik.errors.category
                    ? "error-box"
                    : ""
                } ${
                  formik.touched.category && !formik.errors.category
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.category && formik.errors.category ? (
                <span style={{ color: "red" }}>{formik.errors.category}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Description*</label>
              <input
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                type={"text"}
                className={`form-control form-control-user ${
                  formik.touched.description && formik.errors.description
                    ? "error-box"
                    : ""
                } ${
                  formik.touched.description && !formik.errors.description
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.description && formik.errors.description ? (
                <span style={{ color: "red" }}>
                  {formik.errors.description}
                </span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label>Sold*</label>
              <input
                name="sold"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sold}
                type={"text"}
                className={`form-control form-control-user ${
                  formik.touched.sold && formik.errors.sold ? "error-box" : ""
                } ${
                  formik.touched.sold && !formik.errors.sold
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.sold && formik.errors.sold ? (
                <span style={{ color: "red" }}>{formik.errors.sold}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <input type={"submit"} className="btn btn-success" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
