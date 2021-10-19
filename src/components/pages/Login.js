import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { pageLink } from "../../general/constant";
import {
  useChangeRoute,
  useTextInput,
  useUserManager,
} from "../../general/hook";

export default function Login() {
  let { login } = useUserManager();
  let { goToPage } = useChangeRoute();
  let email = useTextInput();
  let password = useTextInput();
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.main",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: { desktop: 2, mobile: 1 },
            bgcolor: "cardground.main",
            // height: { mobile: "80vh", desktop: "600px" },
            width: { mobile: "90vw", desktop: "400px", tablet: "400px" },
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            borderRadius: "20px ",
          }}
        >
          <Link to={pageLink.index}>
            <Button color="secondary" variant="text">
              <ArrowLeft /> Back to home page
            </Button>
          </Link>
          <div style={{ float: "right" }}>
            <Link to={pageLink.register}>
              <Button color="secondary" variant="text">
                Register <ArrowRight />
              </Button>
            </Link>
          </div>
          <Box sx={{ textAlign: "center", color: "text.primary" }}>
            <h3>Login</h3>
            <h6>Welcome back</h6>
          </Box>
          <Box sx={{ p: 1 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              placeholder="Email"
              {...email}
            />
            <Box sx={{ p: 1 }} />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              placeholder="Password"
              {...password}
            />
            <Box sx={{ p: 1 }} />
            <div style={{ float: "right" }}>
              <Button
                variant="contained"
                onClick={() => {
                  login({ email: email.value, password: password.value }, () =>
                    goToPage(pageLink.index)
                  );
                }}
              >
                Login <ArrowRight />
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}
