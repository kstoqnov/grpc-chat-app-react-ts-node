import React from "react";
import Card from "@material-ui/core/Card";
import { Avatar, Typography, Chip, Grid, makeStyles } from "@material-ui/core";

interface IUser {
  id: number;
  name: string;
  isOnline: boolean;
  avatar: string;
}
interface Props {
  users: Array<IUser>;
}

const useStyles = makeStyles(() => ({
  card: {
    height: "80px",
    width: "100%",
    backgroundColor: "aliceblue",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  avatar: {
    margin: "20px",
  },
}));

const UserList: React.FC<Props> = ({ users }) => {

  const styles = useStyles();

  return (
    <>
      {users.map((u) => (
        <Card className={styles.card} key={u.id}>
          <Avatar className={styles.avatar} src={u.avatar} />
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Typography variant="body1">{u.name}</Typography>
            <Chip
              color={u.isOnline ? "primary" : "default"}
              size="small"
              style={{ width: "70px" }}
              label={u.isOnline ? "online" : "offline"}
            />
          </Grid>
        </Card>
      ))}
    </>
  );
};

export default UserList;
