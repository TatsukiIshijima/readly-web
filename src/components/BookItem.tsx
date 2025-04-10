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
  imgUrl = 'https://placehold.jp/150x150.png',
  author = '',
}: BookItemProps) {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardActionArea onClick={() => onClick(id)}>
        <CardMedia
          component={'img'}
          height={150}
          image={imgUrl}
          alt={'Book Cover'}
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
