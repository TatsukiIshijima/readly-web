import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

interface BookItemProps {
  id: number;
  title: string;
  onClick: (id: number) => void;
  imgUrl?: string;
  author?: string;
}

export default function BookItem({
  id,
  title,
  onClick,
  imgUrl = 'https://placehold.jp/320x240.png',
  author = '',
}: BookItemProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => onClick(id)}>
        <CardMedia
          component={'img'}
          height={140}
          image={imgUrl}
          alt={'Book Cover'}
          sx={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <CardContent>
          <Typography variant="h6" color="textPrimary">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
