import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { AiFillDelete, AiOutlineBars } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { TbGridDots } from "react-icons/tb";
import AsyncSelect from "react-select/async";
import CreateEngObject from "../components/formBuilder/CreateEngObject";
import { Constants } from "../utilities/constants";

const FormBuilderPage = () => {
  const initialFormValues = [
    {
      id: "0",
      heading: "",
      subheading: "",
      fields: [
        {
          id: "0",
          fieldname: "",
          fieldtype: "",
          unit: "",
          defaultvalue: "",
          value: "",
        },
      ],
    },
  ];
  let id = 0;
  const [count, setCount] = useState(1);
  const [parentIndex, setParentIndex] = useState(null);
  const [formValues, setFormValues] = useState(initialFormValues);

  // For react select component
  const filterinputTypes = (inputValue) => {
    return Constants.inputTypes.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  // For react select component\
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterinputTypes(inputValue));
    }, 1000);
  };

  // For Changing the heading and subheading values
  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    [...formValues][i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  // For changing fileds array values
  const handleChangeFields = (i, index, e) => {
    let newFormValues = [...formValues];
    const data = newFormValues[i].fields;
    data[index][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  // For adding new Forms
  const addFormHeading = () => {
    setFormValues([
      ...formValues,
      {
        id: count.toString(),
        heading: "",
        subheading: "",
        fields: [
          {
            id: "0",
            fieldname: "",
            fieldtype: "",
            unit: "",
            defaultvalue: "",
            value: "",
          },
        ],
      },
    ]);
    setCount((count) => count + 1);
  };

  // For removing the the main forms
  const removeFormHeading = (i) => {
    let newFormValues = [...formValues];
    if (newFormValues.length === 1) return;
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  // For adding the field objects inside the forms
  const addFormFields = (i) => {
    const data = formValues.map((item, index) => {
      if (index === i) {
        item.fields.map((obj) => {
          if (id <= parseInt(obj.id)) {
            id = parseInt(obj.id) + 1;
          }
        });
        item.fields.push({
          id: id.toString(),
          fieldname: "",
          fieldtype: "",
          unit: "",
          defaultvalue: "",
          value: "",
        });
      }
      return item;
    });
    setFormValues(data);
    id = 0;
  };

  // For remove the field objects
  const removeFormFields = (i, index, e) => {
    const newFormValues = [...formValues];
    const data = newFormValues[i].fields;
    if (data.length === 1) return;
    data[index][e.target.name] = e.target.value;
    data.splice(index, 1);
    setFormValues(newFormValues);
  };

  // Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  // For Drag and Drop main forms
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(formValues);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setFormValues(items);
  };

  // For Drag and Drop fields
  const handleOnDragEnd2 = (result) => {
    if (!result.destination) return;
    let data = Array.from(formValues);
    let items = formValues[parentIndex].fields;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    data[parentIndex].fields = items;
    setFormValues(data);
  };

  console.log(formValues);
  return (
    <div className="container">
      <CreateEngObject />
      <div className="row border rounded mx-2 mt-2 mb-5 p-2">
        <p className="mt-4 ms-4 fs-4 fw-bold">Data Form</p>
        <form className="w-100" onSubmit={handleSubmit}>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <div
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {formValues.map(
                    ({ id, heading, subheading, fields }, index) => {
                      return (
                        <div key={id} className="w-100">
                          <div className="mt-5 w-100 justify-content-center">
                            <div className="container d-flex w-100 ">
                              <Draggable draggableId={id} index={index}>
                                {(provided1) => (
                                  <div
                                    key={index}
                                    ref={provided1.innerRef}
                                    {...provided1.draggableProps}
                                    {...provided1.dragHandleProps}
                                    className="w-40"
                                  >
                                    <TbGridDots size={"30"} />
                                  </div>
                                )}
                              </Draggable>
                              <div className="form-group d-flex">
                                <label
                                  className="fs-4 fw-bold px-3"
                                  htmlFor="inputsm"
                                >
                                  Heading
                                </label>
                                <input
                                  className="form-control input-sm"
                                  name="heading"
                                  id="inputsm"
                                  type="text"
                                  placeholder="Operational Fields"
                                  value={heading || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div className="form-group d-flex">
                                <label
                                  className="fs-4 fw-bold px-4"
                                  htmlFor="inputsm"
                                >
                                  Heading
                                </label>
                                <input
                                  className="form-control input-sm"
                                  name="subheading"
                                  id="inputsm"
                                  type="text"
                                  placeholder="Operational Fields"
                                  value={subheading || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div className="ps-4">
                                <button
                                  type="button"
                                  className="btn btn-outline-danger"
                                  onClick={() => removeFormHeading(index)}
                                >
                                  <p className="danger p-0 m-0">
                                    <AiFillDelete /> Delete
                                  </p>
                                </button>
                              </div>
                            </div>
                            <div className="col">
                              <div className="row">
                                <div className="d-flex justify-content-evenly mt-4">
                                  <h4 className="fs-5 fw-bold">Field Name</h4>
                                  <h4 className="fs-5 fw-bold">Field Type</h4>
                                  <h4 className="fs-5 fw-bold">Unit</h4>
                                  <h4 className="fs-5 fw-bold">
                                    Default Value
                                  </h4>
                                  <h4 className="fs-5 fw-bold">Value</h4>
                                </div>
                                <DragDropContext onDragEnd={handleOnDragEnd2}>
                                  <Droppable droppableId="fields">
                                    {(provided2) => (
                                      <div
                                        className="characters"
                                        {...provided2.droppableProps}
                                        ref={provided2.innerRef}
                                      >
                                        {fields.map((item, innerIndex) => {
                                          return (
                                            <div
                                              key={item.id}
                                              className="d-flex justify-content-evenly mt-3"
                                            >
                                              <Draggable
                                                draggableId={item.id}
                                                index={parseInt(item.id)}
                                              >
                                                {(provided3) => (
                                                  <div
                                                    key={innerIndex}
                                                    ref={provided3.innerRef}
                                                    {...provided3.draggableProps}
                                                    {...provided3.dragHandleProps}
                                                    className="form-icons"
                                                  >
                                                    <AiOutlineBars
                                                      size={30}
                                                      onMouseEnter={() => {
                                                        if (
                                                          index === parentIndex
                                                        )
                                                          return;
                                                        setParentIndex(index);
                                                      }}
                                                    />
                                                  </div>
                                                )}
                                              </Draggable>
                                              <input
                                                value={item.fieldname || ""}
                                                name="fieldname"
                                                placeholder="  Compressor 1"
                                                onChange={(e) =>
                                                  handleChangeFields(
                                                    index,
                                                    innerIndex,
                                                    e
                                                  )
                                                }
                                                type="text"
                                              ></input>
                                              <AsyncSelect
                                                className="fieldType-select"
                                                cacheOptions
                                                loadOptions={loadOptions}
                                                defaultOptions
                                                defaultInputValue={
                                                  item.fieldtype
                                                }
                                                onChange={(opt) =>
                                                  handleChangeFields(
                                                    index,
                                                    innerIndex,
                                                    {
                                                      target: {
                                                        name: "fieldtype",
                                                        ...opt,
                                                      },
                                                    }
                                                  )
                                                }
                                              />
                                              <input
                                                value={item.unit || ""}
                                                name="unit"
                                                placeholder="  Compressor 1"
                                                onChange={(e) =>
                                                  handleChangeFields(
                                                    index,
                                                    innerIndex,
                                                    e
                                                  )
                                                }
                                                type="text"
                                              ></input>
                                              <input
                                                value={item.defaultvalue || ""}
                                                name="defaultvalue"
                                                placeholder="  Compressor 1"
                                                onChange={(e) =>
                                                  handleChangeFields(
                                                    index,
                                                    innerIndex,
                                                    e
                                                  )
                                                }
                                                type="text"
                                              ></input>
                                              <input
                                                value={item.value || ""}
                                                name="value"
                                                placeholder="  Compressor 1"
                                                onChange={(e) =>
                                                  handleChangeFields(
                                                    index,
                                                    innerIndex,
                                                    e
                                                  )
                                                }
                                                type="text"
                                              ></input>
                                              <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={(e) =>
                                                  removeFormFields(
                                                    index,
                                                    innerIndex,
                                                    e
                                                  )
                                                }
                                              >
                                                <AiFillDelete />
                                              </button>
                                            </div>
                                          );
                                        })}

                                        {provided2.placeholder}
                                      </div>
                                    )}
                                  </Droppable>
                                </DragDropContext>

                                <div className="mt-4 ms-1">
                                  <button
                                    type="button"
                                    onClick={() => addFormFields(index)}
                                    className="btn btn-outline-secondary"
                                  >
                                    <GrAdd />
                                    <span>Add Field</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 ms-1">
                              <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={addFormHeading}
                              >
                                <GrAdd />
                                <span>Add Heading</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="d-flex flex-row-reverse bd-highlight mt-3 mb-3 me-5">
            <div className="p-2 bd-highlight">
              <button type="submit" className="btn btn-outline-secondary">
                Cancel
              </button>
            </div>
            <div className="p-2 bd-highlight">
              <button type="submit" className="btn btn-primary">
                save Engineering object
              </button>
            </div>
          </div>
          {/* <div className="text-end m-0 p-0">
            <button type="submit" className="btn btn-success mt-2 me-5">
              Submit
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default FormBuilderPage;
