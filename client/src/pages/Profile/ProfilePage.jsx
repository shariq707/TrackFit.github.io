import React, { useEffect, useState } from "react";
import { Container, Image, Button, Alert } from "react-bootstrap";
import axios from "axios";

import Layout from "../../component/Layout";
import "./ProfilePage.css";
import EditProfile from "../../component/EditProfile/EditProfile";
import { user2 } from "../../assets";
import { useAuth } from "../../contexts/AuthContext";

const ProfilePage = () => {
  const { currentUser, token, setCurrentUser } = useAuth();
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!currentUser?._id) return;
    setIsLoading(true);
    setError("");

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}api/users/${currentUser._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.data) {
        throw new Error("Failed to fetch user data");
      }

      setCurrentUser(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to load profile data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?._id && token) {
      fetchUser();
    }
  }, [currentUser?._id, token]);

  const handleEditModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
    // Refresh user data when modal is closed
    fetchUser();
  };

  const handleImageError = (e) => {
    e.target.src = user2;
  };

  return (
    <Layout>
      <Container fluid="true">
        <h2 className="text-center mt-4">My Profile</h2>
        {error && (
          <Alert variant="danger" className="mx-auto" style={{ maxWidth: "600px" }}>
            {error}
          </Alert>
        )}
        <section className="d-flex flex-column align-items-center">
          <h4>Current Photo</h4>

          <div className="profile-image-container mb-4" style={{ width: "180px", height: "180px", borderRadius: "50%", overflow: "hidden", position: "relative" }}>
            {isLoading ? (
              <div className="position-absolute top-50 start-50 translate-middle">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <Image
                src={currentUser?.avatar || user2}
                alt={currentUser?.name || "Profile"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
                onError={handleImageError}
              />
            )}
          </div>

          <div className="user-info mt-4">
            <div className="col-sm-3 d-flex gap-3">
              <p className="info">Name</p>
              <p className="fw-semibold">{currentUser?.name || "Anonymous"}</p>
            </div>
            <div className="col-sm-3 d-flex gap-3">
              <p className="info">Gender</p>
              <p className="fw-semibold">{currentUser?.gender || "N/A"}</p>
            </div>
            <div className="col-sm-3 d-flex gap-3">
              <p className="info">Age</p>
              <p className="fw-semibold">{currentUser?.age || "N/A"}</p>
            </div>
            <div className="col-sm-3 d-flex gap-3">
              <p className="info">Height</p>
              <p className="fw-semibold">{currentUser?.height || "N/A"}</p>
            </div>
            <div className="col-sm-3 d-flex gap-3">
              <p className="info">Weight</p>
              <p className="fw-semibold">{currentUser?.weight || "N/A"}</p>
            </div>
          </div>
          <Button
            size="lg"
            className="edit-btn-color edit-width mt-4"
            onClick={handleEditModal}
          >
            Edit profile
          </Button>
        </section>
        <EditProfile modalShow={modalShow} closeModal={closeModal} />
      </Container>
    </Layout>
  );
};

export default ProfilePage;
