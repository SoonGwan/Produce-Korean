import React from 'react';
import './Daegu.scss';

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
import kimst from '../img/kimst.jpg';
import diak from '../img/diak.jpg';
import dalpark from '../img/dalpark.jpg';
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
              이
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="이영은"
          subheader="2019 December 20th "
        />
        <CardMedia
          className={classes.media}
          image={kimst}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            문화와 예술을 품고 김광석의 모습과 노랫말이 담겨있는 "김광석 거리"
            예요 거리 골목골목 마다 추억의 문방구, 카페 분식 등 다양한 가게들이
            즐비해 있어 볼거리, 먹거리 등이 많이 있는 대구 가볼만한곳 입니다.
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
              With culture and art, It's "Kim Gwangseok Street" with lyrics
              Stationery, cafe of every street alley There are a variety of
              shops including snacks. Lots of things to see and eat Daegu is
              worth a visit.
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
              권
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="권용빈"
          subheader="2019 December 18th "
        />
        <CardMedia className={classes.media} image={diak} title="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            1년 365일이 부족할 정도로 아름다운 대구 가볼만한곳 "강정보 디아크"
            입니다. 넓고 시원한 강바람까지 불어 데이트하기 좋고 아이들과
            산책하기도 좋은 최적의 명소예요 ㅎ_ㅎ 전동 휠, 자전거 등 외에도
            다양한 스포츠를 즐길 수 있어 많은 분들에게 인기가 있는 곳으로 좋은
            추억을 만들기에 좋아 대구에 가시면 꼭 한번 가보시는걸 추천드려요!!
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
              Beautiful enough to lack 365 days a year Daegu is a "river
              information dirk". It's great to date with a wide and cool river
              breeze. Good for walking with children It's the best place to see
              In addition to electric wheels and bicycles, I can enjoy it and am
              popular with many people It's good to make good memories. When you
              go to Daegu, I recommend you to try it!
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
          title="김주엽"
          subheader="2019 December 17th "
        />
        <CardMedia className={classes.media} image={dalpark} title="dongde" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            야시장으로 유명한 대구의 "서문시장" 보통 저녁 7시부터 12시까지
            운영하고 있고 한식, 양식, 중식 등 다양한 먹거리가 있어 먹방을 찍기에
            정말 좋은 곳 이예요 ㅎ_ㅎ 가격도 8천원 미만으로 저렴해 대구에
            오신다면 꼭 들려보시는걸 추천드리는 대구 가볼만한곳 입니다.
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
              Daegu's "Seomun Market" is famous for its night market. It has a
              variety of foods, including Korean, Western, and Chinese. It's a
              really nice place ㅎ _ ㅎ The price is less than 8,000 won If you
              are coming, I recommend you to visit Daegu.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
