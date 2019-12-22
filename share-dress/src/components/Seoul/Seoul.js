import React from 'react';
import './Seoul.scss';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import skyscrapper from '../img/skyscrapper.jpg';
import tow from '../img/tow.jpg';
import dongde from '../img/dongde.jpg';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="center-card">
      <div className="whitebox"></div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              권
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="권순관"
          subheader="2019 December 21th "
        />
        <CardMedia
          className={classes.media}
          image={skyscrapper}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            63빌딩 야경이 이뻐서 지니가다가 찍음
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>#서울,#야경,#추천</Typography>
            <Typography paragraph>63 Building Night Scene</Typography>

            {/* <Typography paragraph>:D</Typography> */}
            {/* <Typography>가나다라마바사</Typography> */}
          </CardContent>
        </Collapse>
      </Card>
      <div className="whitebox"></div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              김
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="김영재"
          subheader="2019 December 20th "
        />
        <CardMedia className={classes.media} image={tow} title="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            남산은 서울특별시 중구와 용산구에 걸쳐있는 산이다. 높이는 해발
            270.85m로서 서울의 중심부에 위치하여 서울의 상징이 되기도 한다.
            정상에는 N서울타워가 있으며, 그 부근까지는 케이블카가 설치되어
            있으며 남산 1·2·3호 터널이 뚫려 있다.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>English</Typography>
            <Typography paragraph>
              Namsan is a mountain that spans Jung-gu and Yongsan-gu, Seoul. It
              is 270.85m above sea level and is located in the center of Seoul.
              There is N Seoul Tower at the top, and a cable car is installed
              near it, and Namsan 1, 2, 3 tunnel is opened.
            </Typography>

            {/* <Typography paragraph>:D</Typography> */}
            {/* <Typography>가나다라마바사</Typography> */}
          </CardContent>
        </Collapse>
      </Card>
      <div className="whitebox"></div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              이
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="이문영"
          subheader="2019 December 19th "
        />
        <CardMedia className={classes.media} image={dongde} title="dongde" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            동대문 디자인 플라자는 대한민국 서울특별시 중구에 위치한 복합 문화
            공간이다. 이라크 태생의 영국의 건축가 자하 하디드와
            삼우종합건축사사무소가 디자인하였다.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>English</Typography>
            <Typography paragraph>
              Dongdaemun Design Buffer is a complex cultural space in Jung-gu,
              Seoul, Korea. Iraqi-born British architect Zaha Hadid and Samwoo
              General Architects' Office were designed.
            </Typography>

            {/* <Typography paragraph>:D</Typography> */}
            {/* <Typography>가나다라마바사</Typography> */}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
