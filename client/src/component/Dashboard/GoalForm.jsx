import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

import activitiesType from "../../constants/activitiesType";
import { useAuth } from "../../contexts/AuthContext";
import { useGoal } from "../../contexts/GoalContext";
import { calculateTime, resetForm } from "../../Utils/activityUtils";
import { createGoal, fetchGoalsApi } from "../../services/goalService";

function GoalForm({ goalForm, handleGoalClose }) {
  const { currentUser, token } = useAuth();
  const { setGoals } = useGoal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    typeOfGoal: "",
    deadline: "",
    duration: 0,
    energyBurn: 0,
    distance: 0,
    email: currentUser.email,
  });
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");

    if (name === "hour") {
      setHour(value);
    } else if (name === "minute") {
      setMinute(value);
    }

    const newHour = name === "hour" ? value : hour;
    const newMinute = name === "minute" ? value : minute;

    const duration = calculateTime(newHour, newMinute);

    setFormData((prevData) => ({
      ...prevData,
      duration,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.typeOfGoal || formData.typeOfGoal === "select your activity") {
      setError("Please select an activity type");
      return false;
    }
    if (!formData.deadline) {
      setError("Please select a deadline");
      return false;
    }
    if (hour === 0 && minute === 0 && formData.energyBurn === 0 && formData.distance === 0) {
      setError("Please set at least one goal (duration, energy burn, or distance)");
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
      const goalData = {
        ...formData,
        userId: currentUser._id,
        duration: parseInt(formData.duration) || 0,
        energyBurn: parseInt(formData.energyBurn) || 0,
        distance: parseInt(formData.distance) || 0,
      };

      const newGoal = await createGoal(goalData, token);
      
      if (newGoal) {
        try {
          // Fetch updated goals after creation
          const updatedGoals = await fetchGoalsApi(currentUser._id, token);
          setGoals(updatedGoals);
          
          // Reset form and close modal
          resetForm(setFormData, setHour, setMinute, currentUser.email);
          handleGoalClose();
        } catch (fetchError) {
          console.error("Error fetching updated goals:", fetchError);
          setError("Goal created but failed to refresh list. Please reload the page.");
        }
      }
    } catch (error) {
      console.error("Error creating goal:", error);
      setError(
        error.response?.data?.message || 
        "Failed to create goal. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      show={goalForm}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        onClick={handleGoalClose}
        style={{ backgroundColor: "#8a2be2", color: "white" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">Set Goal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Choose Activity</Form.Label>
              <Form.Select
                aria-label="typeOfGoal"
                name="typeOfGoal"
                value={formData.typeOfGoal}
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

            <Form.Group
              as={Col}
              className="mb-3 d-flex flex-column"
              controlId="dateTime"
            >
              <Form.Label>Finish Date</Form.Label>
              <input
                type="date"
                name="deadline"
                id="deadline"
                style={{
                  height: "38px",
                }}
                onChange={handleChange}
                value={formData.deadline}
                required
              />
            </Form.Group>
          </Row>

          <h5>Your challenge</h5>
          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Energy burn (Calories)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                name="energyBurn"
                onChange={handleChange}
                value={formData.energyBurn}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Distance (meter)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                name="distance"
                onChange={handleChange}
                value={formData.distance}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3 d-flex flex-column">
              <Form.Label>Duration Time</Form.Label>
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
              onClick={handleGoalClose}
              disabled={isSubmitting}
              style={{ backgroundColor: "#FF4878", border: "none" }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default GoalForm;
