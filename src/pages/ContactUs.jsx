import styles from "../styles/ContactUs.module.css";
const ContactUs = () => {
  return (
    <div className="main">
      <div>
        <h1
          style={{
            color: "#FF7E48",
            fontSize: "96px",
            fontWeight: "500",
            lineHeight: "100px",
            textAlign: "center",
            fontFamily: "Apfel Grotezk, sans-serif",
          }}
        >
          Get In Touch{" "}
        </h1>
      </div>

      <div
        className={`${styles.cards}`}

        //  style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "space-evenly",
        //   alignItems: "center",

        //  }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              background: "#F2F7F2",
              borderRadius: "20px",
              width: "269px",
              height: "493px",
              border: "3px solid #000",
              position: "absolute",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "190px",
                  height: "190px",
                  borderRadius: "50%",
                  background: "#D8D5D0",
                  marginTop: "24px",
                  marginBottom: "24px",
                }}
              >
                <img
                  src="/Location.svg"
                  alt="Email"
                  width="128px"
                  height="128px"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "400",
                    lineHeight: "100px",

                    color: "#000",
                  }}
                >
                  {" "}
                  Address
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",

                    color: "#000",
                  }}
                >
                  {" "}
                  Delhi Office: 6950 S. Jordan Road Centennial, CO 80112
                  <br />
                  <br />
                  Bengaluru Office: 6775 Sherman Street, Loveland, CO 80538
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "269px",
              height: "490px",
              borderRadius: "20px",
              border: "3px solid #000",
              background: "#D9D9D9",

              textAlign: "center",
              margin: "1rem",
            }}
          ></div>
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              background: "#F2F7F2",
              borderRadius: "20px",
              width: "269px",
              height: "493px",
              border: "3px solid #000",
              position: "absolute",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "190px",
                  height: "190px",
                  borderRadius: "50%",
                  background: "#D8D5D0",
                  marginTop: "24px",
                  marginBottom: "24px",
                }}
              >
                <img
                  src="/Phone.svg"
                  alt="Email"
                  width="128px"
                  height="128px"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "400",
                    lineHeight: "100px",

                    color: "#000",
                  }}
                >
                  {" "}
                  Phone
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",

                    color: "#000",
                  }}
                >
                  {" "}
                  Delhi Office: 877.WEIFIELD phone
                  <br />
                  <br />
                  Bengaluru Office: 877.WEIFIELD phone
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "269px",
              height: "490px",
              borderRadius: "20px",
              border: "3px solid #000",
              background: "#D9D9D9",

              textAlign: "center",
              margin: "1rem",
            }}
          ></div>
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              background: "#F2F7F2",
              borderRadius: "20px",
              width: "269px",
              height: "493px",
              border: "3px solid #000",
              position: "absolute",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "190px",
                  height: "190px",
                  borderRadius: "50%",
                  background: "#D8D5D0",
                  marginTop: "24px",
                  marginBottom: "24px",
                }}
              >
                <img
                  src="/Email.svg"
                  alt="Email"
                  width="128px"
                  height="128px"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "400",
                    lineHeight: "100px",

                    color: "#000",
                  }}
                >
                  {" "}
                  E-Mail
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",

                    color: "#000",
                  }}
                >
                  {" "}
                  email{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    @livio.com{" "}
                  </span>
                  <br />
                  <br />
                  Product Service Calls:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    service@livio.com{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "269px",
              height: "490px",
              borderRadius: "20px",
              border: "3px solid #000",
              background: "#D9D9D9",

              textAlign: "center",
              margin: "1rem",
            }}
          ></div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className={`${styles.bottomBox}`}
          style={{
            background: "linear-gradient(90deg, #D9D9D9 0%, #FFF 100%)",
            marginTop: "64px",
            borderRadius: "27px",
            width: "1170px",
            height: "740px",
            display: "flex",

            gap: "50px",
            padding: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "64px",
                fontWeight: "500",
                lineHeight: "100px",
                color: "#000",
                marginBottom: "26px",
              }}
            >
              Message Us
            </div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "20px",
                color: "#000",
                marginBottom: "26px",
                textAlign: "center",
              }}
            >
              Have a question or need assistance? We're here to help! Whether
              you're looking for customization options, pricing details, or
              anything else, send us a message. Our team is ready to assist you
              in finding the perfect furniture pieces for your home. We look
              forward to connecting with you!
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className={`${styles.FormBack}`} style={{}}></div>
            <div className={`${styles.Formbox}`}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    color: "#000",
                    fontSize: "32px",
                    fontWeight: "500",
                    lineHeight: "32px",
                    display: "flex",

                    justifyContent: "flex-start",
                  }}
                >
                  {" "}
                  Name
                </div>
                <div
                  className={`${styles.formInput}`}
                  style={{
                    display: "flex",

                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "start",
                      gap: "10px",
                    }}
                  >
                    <input
                      style={{
                        width: "219px",
                        height: "54px",
                        borderRadius: "5px",
                        border: "2px solide #000",
                        background: "#fff",
                      }}
                      type="text"
                      name=""
                      id=""
                    />
                    <label
                      style={{
                        color: "#000",
                        fontSize: "20px",
                        fontWeight: "400",
                        lineHeight: "24px",
                      }}
                    >
                      First
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "start",
                      gap: "10px",
                    }}
                  >
                    <input
                      style={{
                        width: "219px",
                        height: "54px",
                        borderRadius: "5px",
                        border: "2px solide #000",
                        background: "#fff",
                      }}
                      type="text"
                      name=""
                      id=""
                    />
                    <label
                      style={{
                        color: "#000",
                        fontSize: "20px",
                        fontWeight: "400",
                        lineHeight: "24px",
                      }}
                    >
                      Last
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      color: "#000",
                      fontSize: "32px",
                      fontWeight: "500",
                      lineHeight: "32px",
                      textAlign: "start",
                    }}
                  >
                    Email
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      className={`${styles.EmailIn}`}
                      style={{}}
                      type="text"
                      name=""
                      id=""
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        color: "#000",
                        fontSize: "32px",
                        fontWeight: "500",

                        textAlign: "start",
                      }}
                    >
                      Comments
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <textarea
                        style={{
                          width: "539px",
                          height: "54px",
                          borderRadius: "5px",
                          border: "2px solid #000",
                          background: "#fff",
                        }}
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
