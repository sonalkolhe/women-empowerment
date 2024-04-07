/** @format */

import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MaterialCard({ member }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "var(--backGround-sec)",
        color: "var(--heading-trival)",
      }}
      className='w-full'>
      <CardMedia
        component='img'
        height='194'
        width='194'
        image={member.photo}
        alt={member.name}
      />
      <CardContent>
        <Typography variant='h6' color='text.Primary'>
          {member.name}
        </Typography>
        <div className='flex justify-between'>
          <p
            className='uppercase whitespace-nowrap text-[8px] sm:text-sm '
            color='text.secondary'>
            {member.desc}
          </p>
          <p
            className='uppercase whitespace-nowrap text-[8px] sm:text-sm'
            color='text.secondary'>
            {member.location}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

MaterialCard.propTypes = {
  member: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
