import "../css/Loading.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { profile } from "../service/auth";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Profile() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getProfile = async () => {
    setLoading(true);
    try {
      const res = await profile();
      console.log("🚀 ~ getProfile ~ res:", res);
      setUserProfile(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  console.log("🚀 ~ Profile ~ loading:", loading);

  return (
    <Layout>
      <section style={{ backgroundColor: "#eee", height: "50vh" }}>
        {loading && (
          <div className="loading">
            <Loading />
          </div>
        )}
        {userProfile && (
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src={userProfile?.image}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-4">
                      Bay Area, San Francisco, CA
                    </p>
                    <div className="d-flex justify-content-center mb-2">
                      <MDBBtn onClick={handleLogout}>Logout</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {userProfile?.firstName} {userProfile?.lastName}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {userProfile?.email ?? ""}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {userProfile?.phone}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>User Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {userProfile?.username ?? ""}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {userProfile?.address.address ?? ""} {", "}
                          {userProfile?.address.city ?? ""} {", "}
                          {userProfile?.address.country ?? ""}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )}
      </section>
    </Layout>
  );
}
export default Profile;
