import React from 'react';
import './Busan.scss';

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
import gijang from '../img/gijang.jpg';
import gong from '../img/gong.jpg';
import yasi from '../img/yasi.jpg';
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
    backgroundColor: red[3400],
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
              박
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="박 진"
          subheader="2019 December 20th "
        />
        <CardMedia
          className={classes.media}
          image={gijang}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>기장 더 무빙 카라반 </b>친구들과 와도 좋고 연인들과 오면 더 좋은
            예쁜 카라반이 줄지어 있는 기장의 핫플 장소 카라반 안에서 잘 수도
            있고 밖에서 고기도 구워 먹을 수 있으니 여행지로는 엄청 인기 있는
            핫플레이스야~ 주방과 세탁실은 건물 안에 따로 있으니깐 편하게
            이용하면 될 거야~
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
              <b>Captain the Moving Caravan</b> You can come with friends or
              come with lovers Hot spot of millet where pretty caravan is lined
              up You can sleep inside the caravan and you can eat meat outside.
              It's very popular as a tourist destination Hot place ~ Kitchen and
              laundry room inside the building There is a separate so you can
              use it comfortably ~
            </Typography>

            {/* <Typography paragraph>:D</Typography> */}
            {/* <Typography>가나다라마바사</Typography> */}
          </CardContent>
        </Collapse>
      </Card>
      <div className="whitebox1"></div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              오
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="오하형"
          subheader="2019 December 18th "
        />
        <CardMedia className={classes.media} image={gong} title="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>가야공원 공원집</b>
            냇가 소리를 들으면 맛있는 오리고기를 먹을 수 있는 멋진 곳! 어디를
            앉던 시원한 바람과 냇가 소리를 들을 수 있어서 고기 씹는 맛이
            끝내주는 곳이지. 경치도 좋지만 오리고기가 맛있다고 소문난 곳이라서
            많은 사람들이 찾는 곳이야. 더운 날씨 시원한 냇가 소리를 들으면서
            맛있는 식사 어때?
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
              <b>Gaya Park Park House</b>
              When you hear the stream, you can eat delicious duck meat. Nice
              place to be! Wherever you sit, the cool breeze I can hear the
              stream, so the chewing taste of the meat Awesome place. The view
              is good, but the duck It's rumored to be delicious, so many people
              I'm looking for it. Hot weather cool stream sound How about a
              delicious meal while listening?
            </Typography>

            {/* <Typography paragraph>:D</Typography> */}
            {/* <Typography>가나다라마바사</Typography> */}
          </CardContent>
        </Collapse>
      </Card>
      <div className="whitebox1"></div>
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
          title="김혜선"
          subheader="2019 December 17th "
        />
        <CardMedia className={classes.media} image={yasi} title="dongde" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>부평 깡통야시장</b>
            다양하고 맛있는 세계음식을 한 곳에서 먹을 수 있는 멋진 곳이지. 많은
            맛집들이 모여 있는 거리니깐 맛은 걱정하지 말고 먹어보라구 처음 보는
            음식들이라도 엄청 맛있으니깐 말이야 고기가 잔뜩 있으니깐 고기
            좋아하는 사람들에게는 엄청 좋겠지? 맛난 소고기로 만든 요리들도
            많아서 엄청 기쁘게 돌아다녔지 먹을 거 좋아하는 연인들은 이리로~
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
              <b>Bupyeong Tin Night Market</b>A variety of delicious world foods
              in one place Nice place to be. Many restaurants are gathered Don't
              worry about the taste Even the first food you see is so delicious.
              There's a lot of meat, so I like meat Would be great for people?
              With delicious beef I made a lot of dishes so I wandered very
              happy Lovers who like to eat come here ~
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
