import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

import activitiesType from "../../constants/activitiesType";
import { useAuth } from "../../contexts/AuthContext";
import { useActivities } from "../../contexts/ActivityContext";
import {
  calculateTime,
  calculateEnergyBurn,
  resetForm,
} from "../../Utils/activityUtils";
import {
  createActivity,
  fetchActivitiesApi,
} from "../../services/activityService";

const ActivityForm = ({ activityForm, handleAcClose }) => {
  const { currentUser, token } = useAuth();
  const { setActivities } = useActivities();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    typeOfActivity: "",
    title: "",
    dateOfActivity: "",
    duration: 0,
    energyBurn: 0,
    distance: 0,
    description: "",
    email: currentUser.email,
  });
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!activityForm) {
      resetForm(setFormData, setHour, setMinute, currentUser.email);
    }
  }, [activityForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "hour") {
      setHour(value);
    } else if (name === "minute") {
      setMinute(value);
    }
    // Get the new hour and minute values
    const newHour = name === "hour" ? value : hour;
    const newMinute = name === "minute" ? value : minute;

    const duration = calculateTime(newHour, newMinute);
    const energyBurn = calculateEnergyBurn(formData.typeOfActivity, duration);

    // Calculate the duration based on the updated hour and minute
    setFormData((prevData) => ({
      ...prevData,
      duration,
      energyBurn,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.typeOfActivity || formData.typeOfActivity === "select your activity") {
      setError("Please select an activity type");
      return false;
    }
    if (!formData.title.trim()) {
      setError("Please enter a habit title");
      return false;
    }
    if (!formData.dateOfActivity) {
      setError("Please select a date");
      return false;
    }
    if (hour === 0 && minute === 0) {
      setError("Please enter activity duration");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create the activity data object
      const activityData = {
        ...formData,
        userId: currentUser._id,
        duration: parseInt(formData.duration) || 0,
        energyBurn: parseInt(formData.energyBurn) || 0,
        distance: parseInt(formData.distance) || 0,
      };

      // First create the activity
      const newActivity = await createActivity(activityData, token);
      
      if (newActivity) {
        try {
          // Then fetch updated activities
          const updatedActivities = await fetchActivitiesApi(currentUser._id, token);
          setActivities(updatedActivities);
          
          // Reset form and close modal
          resetForm(setFormData, setHour, setMinute, currentUser.email);
          handleAcClose();
        } catch (fetchError) {
          console.error("Error fetching updated activities:", fetchError);
          setError("Activity created but failed to refresh list. Please reload the page.");
        }
      }
    } catch (error) {
      console.error("Error creating activity:", error);
      setError(
        error.response?.data?.message || 
        "Failed to create activity. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      show={activityForm}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        onClick={handleAcClose}
        style={{
          backgroundColor: "#8a2be2",
          color: "white",
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Create Activity
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Choose Activity</Form.Label>
            <Form.Select
              aria-label="typeOfActivity"
              name="typeOfActivity"
              value={formData.typeOfActivity}
              onChange={handleChange}
              required
            >
              <option>select your activity</option>
              {activitiesType.map((activity) => (
                <option key={activity.name} value={activity.name}>
                  {activity.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupTitle">
            <Form.Label>Habit Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={handleChange}
              value={formData.title}
              required
            />
          </Form.Group>

          <Row>
            <Form.Group
              as={Col}
              className="mb-3 d-flex flex-column"
              controlId="dateTime"
            >
              <Form.Label>Date</Form.Label>
              <input
                type="date"
                name="dateOfActivity"
                id="dateOfActivity"
                style={{
                  height: "38px",
                }}
                onChange={handleChange}
                value={formData.dateOfActivity}
                required
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 d-flex flex-column">
              <Form.Label>Time</Form.Label>
              <div className="d-flex gap-2">
                <Form.Control
                  type="number"
                  min="0"
                  max="10000"
                  placeholder="Hour"
                  className="mr-2"
                  value={hour}
                  onChange={handleChange}
                  name="hour"
                />
                <Form.Control
                  type="number"
                  min="0"
                  max="59"
                  placeholder="Minute"
                  value={minute}
                  onChange={handleChange}
                  name="minute"
                />
              </div>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Energy burn (Calories)</Form.Label>
              <Form.Control
                type="number"
                name="energyBurn"
                disabled
                value={formData.energyBurn}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Distance (meter)</Form.Label>
              <Form.Control
                type="number"
                name="distance"
                onChange={handleChange}
                value={formData.distance}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="describe your activity"
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
          </Form.Group>

          {error && (
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "red" }}>{error}</Form.Label>
            </Form.Group>
          )}

          <Modal.Footer>
            <Button 
              type="submit" 
              className="edit-btn-color"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create'}
            </Button>

            <Button
              onClick={handleAcClose}
              disabled={isSubmitting}
              style={{
                backgroundColor: "#FF4878",
                border: "none",
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ActivityForm;
