import emailjs from "@emailjs/browser";
import React, { useRef, useState, useEffect } from "react";
import { Container } from "@mui/system";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Snackbar,
	TextField,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import ICON_FACEBOOK from "../assets/facebookoscuro.svg";
import ICON_INSTAGRAM from "../assets/instagramoscuro.svg";
import ICON_LINKEDIN from "../assets/linkedinoscuro.svg";

const styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "White",
		borderRadius: "6px",
		padding: "8.5rem 0",
	},
	mainBox: {
		textAlign: "start",
		display: "flex",
		flexDirection: "row",
		padding: "1rem",
		justifyContent: "center",
	},
	textTitle: {
		weight: "1200",
	},
	leftColumn: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	icons: {
		width: "50px",
		height: "50px",
		color: "red",
		marginTop: "15px",
		alignItems: "center",
		marginRight: "1.5rem",
	},
	iconsContact: {
		width: "34px",
		height: "34px",
		color: "white",
		marginTop: "15px",
		alignItems: "center",
		marginRight: "1.25rem",
	},
	textBigTitle: {
		marginTop: "4rem",
		marginBottom: "-4rem",
	},
	barra: {
		height: "22.4rem",
		border: "1px solid black",
		width: "0px",
		margin: "0 10rem 0 9rem",
	},
	inputs: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		textAlign: "start",
	},
};

export default function Contact({ myRef }) {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({
		email_id: "",
		user_name: "",
		message: "",
	});
	const [disableButton, setDisableButton] = useState(true);
	const down900px = useMediaQuery(theme.breakpoints.down("md"));
	const serviceID = "service_tzznub5";
	const templateID = "template_sgo6kcl";
	const publicKey = "gkS6zUdsnIda6h8zh";
	const form = useRef();

	const handleChange = (e) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(serviceID, templateID, form.current, publicKey)
			.then((result) => {
				console.log(result.text);
				setOpen(true);
				console.log("message sent");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	// useEffect(() => {
	//     if (
	//         data.email_id.length > 4 &&
	//         data.user_name.length > 2 &&
	//         data.message.length > 5
	//     ) {
	//         setDisableButton(false);
	//     } else {
	//         setDisableButton(true);
	//     }
	// }, [data]);

	return (
		<Container ref={myRef} sx={styles.container}>
			{/* TITULO */}
			<Box sx={{ flexDirection: "column" }}>
				<Box sx={{ textAlign: "start" }}>
					<Typography
						sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, marginLeft: {xs: "1.1rem", md: 0} }}
						gutterBottom
					>
						LET US HELP YOU
					</Typography>
					<Typography
						sx={{ fontSize: { xs: "1.8rem", md: "3rem" }, marginLeft: {xs: "1rem", md: 0} }}
						gutterBottom
					>
						TELL US YOUR IDEA
					</Typography>
				</Box>
				<Box sx={styles.mainBox}>
					{/* INFO (Phone - Email - Location) */}
					{!down900px && (
						<Box item xs={4} sx={styles.leftColumn}>
							<Box sx={{ flexDirection: "column" }}>
								<Box
									sx={{
										textAlign: "start",
										display: "flex",
									}}
								>
									<Box>
										<Typography sx={styles.textTitle} mt={2}>
											Phone
										</Typography>
										<Typography sx={styles.text}>
											+01 (305) 790 - 2129
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										textAlign: "start",
										display: "flex",
									}}
								>
									<Box>
										<Typography sx={styles.textTitle} mt={2}>
											Email
										</Typography>
										<Typography sx={styles.text}>
											sebastian@spgdigitalcorp.com
										</Typography>
									</Box>
								</Box>
								<Box
									sx={{
										textAlign: "start",
										display: "flex",
									}}
								>
									<Box>
										<Typography sx={styles.textTitle} mt={2}>
											Location
										</Typography>
										<Typography sx={styles.text}>
											550 ocean 2c drive key Biscayne 33149
										</Typography>
									</Box>
								</Box>
							</Box>
							<Box
								sx={{
									textAlign: "start",
									marginBottom: "0.25rem",
								}}
							>
								<a
									rel="noreferrer"
									target="_blank"
									href="https://www.instagram.com/spg_digital/"
								>
									<Box component="img" src={ICON_INSTAGRAM} sx={styles.icons} />
								</a>
								<a
									rel="noreferrer"
									target="_blank"
									href="https://www.linkedin.com/company/spg-digital/about//"
								>
									<Box component="img" src={ICON_LINKEDIN} sx={styles.icons} />
								</a>
								<a
									rel="noreferrer"
									target="_blank"
									href="https://www.instagram.com/spg_digital/"
								>
									<Box component="img" src={ICON_FACEBOOK} sx={styles.icons} />
								</a>
							</Box>
						</Box>
					)}
					{/* BARRA */}

					{!down900px && <Box sx={styles.barra} />}
					{/* INPUT */}
					<form sx={styles.inputs} ref={form} onSubmit={sendEmail}>
						<Box sx={{}}>
							<TextField
								sx={{
									marginRight: "2rem",
									marginBottom: "25px",
									width: "100%",
								}}
								id="standard-helperText"
								label="Your e-mail"
								variant="outlined"
								type="email"
								name="email_id"
								onChange={handleChange}
							/>

							<TextField
								sx={{
									width: "100%",
									marginRight: "2rem",
									marginBottom: "25px",
								}}
								id="standard-helperText"
								label="Your name"
								variant="outlined"
								type="text"
								name="user_name"
								onChange={handleChange}
							/>
						</Box>
						<Box>
							<TextField
								/* sx={{ marginTop: '25px', marginBottom: '20px' }} */
								id="outlined-multiline-static"
								label="How can we help you?"
								multiline
								rows={3}
								fullWidth
								name="message"
								onChange={handleChange}
							/>
						</Box>
						<FormControlLabel
							sx={{ marginBottom: "25px" }}
							control={
								<Checkbox
									defaultChecked
									sx={{
										"&.Mui-checked": {
											color: "gray",
										},
									}}
								/>
							}
							type="checkbox"
							name="toolmakerID"
							value="subscribedToNewsletter"
							label="Subscribe to newsletter"
						/>
						<Box sx={{ textAlign: { xs: "center", md: "start" } }}>
							<Button
								type="submit"
								value="Send"
								// disabled={disableButton}
								sx={{
									width: "175px",
									borderRadius: "20px",
									color: "gray",
									borderColor: "gray",
									textTransform: "capitalize",
									textAlign: "center",
									"&:hover": {
										borderColor: "black",
										color: "black",
									},
								}}
								variant="outlined"
							>
								Send!
							</Button>
						</Box>
						<Snackbar
							open={open}
							autoHideDuration={6000}
							onClose={handleClose}
							message="Message Sent"
						/>
					</form>
				</Box>
			</Box>
		</Container>
	);
}
