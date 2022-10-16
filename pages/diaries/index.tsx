import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Router from "next/router";
import AddDiaryBtn from "../../components/Buttons/AddDiaryBtn";
import { useAppSelector } from "../../store/hooks";
import { selectDiaries } from "../../store/slices/diarySlice";

const DiariesPage = (props: any) => {
  const diaries = useAppSelector(selectDiaries);

  return (
    <div>
      <h2>Diaries</h2>
      <AddDiaryBtn />

      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Mode</TableCell>
                <TableCell>DayEvent</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {diaries.map((diary) => (
                <TableRow
                  key={diary._id}
                  hover
                  onClick={() => Router.push(`/diaries/${diary._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{diary.date}</TableCell>
                  <TableCell>{diary.mode}</TableCell>
                  <TableCell>{diary.dayEvent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default DiariesPage;
