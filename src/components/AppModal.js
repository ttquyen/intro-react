import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DetailPage from "../pages/DetailPage";
import { JobPostingsContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "white",
};

export default function AppModal() {
  const contextProps = useContext(JobPostingsContext);
  const { openJobDetail, setOpenJobDetail } = contextProps;
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setOpenJobDetail(false);
    navigate("/");
  };
  return (
    <div>
      <Modal
        open={openJobDetail}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DetailPage />
        </Box>
      </Modal>
    </div>
  );
}
