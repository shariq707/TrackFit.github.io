import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchActivitiesApi = async (userId, token) => {
  try {
    const response = await axios.get(
      `${API_URL}api/activities/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.error("Error fetching activities data:", error);
    throw error;
  }
};

export const createActivity = async (formData, token) => {
  try {
    const response = await axios.post(`${API_URL}api/activities`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
    return response?.data;
  } catch (error) {
    console.error("Error creating activity:", error);
    throw error;
  }
};

export const updateActivity = async (activityId, formData, token) => {
  try {
    const response = await axios.patch(
      `${API_URL}api/activities/${activityId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }
    );
    return response?.data;
  } catch (error) {
    console.error("Error updating activity:", error);
    throw error;
  }
};

export const deleteActivity = async (activityId, token) => {
  try {
    await axios.delete(`${API_URL}api/activities/${activityId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error deleting activity:", error);
    throw error;
  }
};
