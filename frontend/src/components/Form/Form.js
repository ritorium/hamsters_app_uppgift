import { useRef } from "react";
import { useForm } from "react-hook-form";
import { addData } from "../../api";
import { START_OBJECT } from "../../constants";
import "./Form.css";

export default function Form(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formRef = useRef(null);

  const addHamster = (data) => {
    const new_hamster = { ...data, ...START_OBJECT };
    formRef.current.reset();
    props.toggleLoading(true);
    addData(new_hamster).then((response) => {
      props.getHamsters();
      props.togglePopupForm(false);
    });
  };

  return (
    <div className={!!props.open ? "wrapper-form is-open" : "wrapper-form"}>
      <form className="form" onSubmit={handleSubmit(addHamster)} ref={formRef}>
        <h2 className="form-title">add hamster</h2>
        <div
          className="close-form"
          onClick={() => props.togglePopupForm(false)}
        >
          &#10006;
        </div>
        <div className="form-field">
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Required",
              },
              minLength: {
                value: 2,
                message: "At least two letters",
              },
              maxLength: {
                value: 10,
                message: "No more than ten letters",
              },
            })}
          />
          {errors.name && errors.name.message && (
            <p className="error">{errors.name && errors.name.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="age">age:</label>
          <input
            type="number"
            id="age"
            name="age"
            {...register("age", {
              required: {
                value: true,
                message: "Required",
              },
            })}
          />
          {errors.age && errors.age.message && (
            <p className="error">{errors.age && errors.age.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="favFood">favorit food:</label>
          <input
            type="text"
            id="favFood"
            name="favFood"
            {...register("favFood", {
              required: {
                value: true,
                message: "Required",
              },
            })}
          />
          {errors.favFood && errors.favFood.message && (
            <p className="error">{errors.favFood && errors.favFood.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="favorit-occupation">favorit occupation:</label>
          <input
            type="text"
            id="loves"
            name="loves"
            {...register("loves", {
              required: {
                value: true,
                message: "Required",
              },
            })}
          />
          {errors.loves && errors.loves.message && (
            <p className="error">{errors.loves && errors.loves.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="images">add image</label>
          <select
            name="imgName"
            {...register("imgName", {
              required: {
                value: true,
                message: "Required",
              },
            })}
          >
            <option value=""></option>
            <option value="hamster-7.jpg">hamster-7.jpg</option>
            <option value="hamster-14.jpg">hamster-14.jpg</option>
            <option value="hamster-15.jpg">hamster-15.jpg</option>
            <option value="hamster-16.jpg">hamster-16.jpg</option>
            <option value="hamster-17.jpg">hamster-17.jpg</option>
            <option value="hamster-18.jpg">hamster-18.jpg</option>
          </select>
          {errors.imgName && errors.imgName.message && (
            <p className="error">{errors.imgName && errors.imgName.message}</p>
          )}
        </div>
        <button type="submit" className="btn-add-hamster">
          add
        </button>
      </form>
    </div>
  );
}
