import React from 'react';
import './Daejeon.scss';

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
import expo from '../img/expo.jpg';
import timeworld from '../img/timeworld.jpg';
import wepark from '../img/wepark.jpg';
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
        <CardMedia className={classes.media} image={expo} title="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            대전의 상징인 대전 엑스포 과학공원입니다. 나들이 장소로 손색없어요
            뒤에 꿈돌이 놀이동산도 몇 번 갔었는데 아쉽게 없어진지 꾀
            오래되었습니다. 그래도 여름에서 가을시즌에는 음악분수가 남녀노소
            불문하고 인기가 굉장히 많은데요 그 근처 한빛광장에서 프리마켓도
            일요일 빼고 매일 열리니까 치킨에 맥주 한 잔 어떨까요? 치맥말고 더
            좋은 힐링이 있는가! 무더운 여름 음악분수의 노래와 시원한 분수앞에서
            데이트하며, 무더위를 피해보는건 어떨까요??
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
              Daejeon Expo Science Park, the symbol of Daejeon. It's a good
              place to go out Where have you been to the Dream Playground many
              times? It's old. I have a fall season from summer though It's very
              popular regardless of that It's open every day except Sunday, so
              why don't you have a beer for chicken? More than Chimac Is there a
              good healing! Sultry summer music in front of fountain and cool
              song of fountain Why don't you go out on a date and wish you a hot
              day ??
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
          title="김영재"
          subheader="2019 December 20th "
        />
        <CardMedia
          className={classes.media}
          image={timeworld}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            대전의 랜드마크 최고 중심가입니다. 술집은 이곳에 다 모여있다고해도
            과언이 아닌데요! 술을 좋아하는 효짱에게는 집과도 같은동네 입니다.
            실제로 살고있는 집의 옆동네랍니다~ 시끌벅적하고 헌팅문화와 클럽,
            그리고 다양한 술집과 음식점. 주로 20~30대 남녀들이 대부분
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
              It is the landmark top center of Daejeon. Even if the bars are all
              gathered here. No exaggeration! Hyo-chan who likes to drink is
              like a home. It's next to the house where you actually live ~
              noisy, hunting culture, club, And various pubs and restaurants.
              Mostly men and women in their 20s and 30s
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
        <CardMedia className={classes.media} image={wepark} title="dongde" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            우리들 공원에서는 인디밴드의 버스킹이나 가끔 무대에서 공연팀이
            행사도 한답니다. 그 주변이 싹 다 놀거리 상권이므로 나들이코스로
            낮에는 은행동에서 여러가지 컨텐츠를 즐기다가 저녁엔 여기와서 주로 술
            한잔을 마시죠. 대흥동엔 볼링장도 있으니 참고.
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
              In the ulideul park, indie bands are busking and sometimes
              performances One. Since the area is all around, it is an outing
              course. After enjoying various contents in the bank building, I
              come here in the evening and usually have a drink. There is also a
              bowling alley in Daeheung-dong.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
