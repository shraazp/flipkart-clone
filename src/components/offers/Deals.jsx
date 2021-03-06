/**
 * Common template for top offers and various deals
 * @author:Shravya P
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Box, Typography, Button, Divider,
} from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import { useDispatch } from 'react-redux';
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import useStyle from './styles';
import { setCategory } from '../../actions/categoryActions';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function Deals({
  data, timer, title,
}) {
  const navigate = useNavigate();
  const classes = useStyle();
  const dispatch = useDispatch();
  const handleCategory = (category, subCat) => {
    dispatch(setCategory({
      category,
      subCategory: subCat,
    }));
  };
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds }) => (
    <span className={classes.timer}>
      {hours}
      {' '}
      :
      {' '}
      {minutes}
      {' '}
      :
      {' '}
      {seconds}
      {' '}
      Left
    </span>
  );
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {
            timer && (
            <Box className={classes.timer}>
              <img src={timerURL} style={{ width: 24 }} alt="time clock" />
              <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
            </Box>
            )
        }
        <Button variant="contained" color="primary" className={classes.button}>View All</Button>
      </Box>
      <Divider />
      <Carousel
        swipeable={false}
        slidesToSlide={5}
        draggable={false}
        responsive={responsive}
        autoPlay
        autoPlaySpeed={10000}
        keyBoardControl
        showDots={false}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
            data.map((temp) => (
              <Box textAlign="center" className={classes.wrapper} onClick={() => { handleCategory(temp.attributes.category, temp.attributes.subcategory); navigate(`categories/${temp.attributes.CategoryId}`); }}>
                <img
                  src={temp.attributes.imageUrl}
                  className={classes.image}
                  alt={temp.attributes.name}
                />
                <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{temp.attributes.name}</Typography>
                <Typography className={classes.text} style={{ color: 'green' }}>{temp.attributes.discount}</Typography>
                <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{temp.attributes.tagline}</Typography>
              </Box>
            ))
        }
      </Carousel>
    </Box>
  );
}
Deals.propTypes = {
  data: PropTypes.node,
  timer: PropTypes.node,
  title: PropTypes.node,
};
Deals.defaultProps = {
  data: <span>More</span>,
  timer: { },
  title: <div />,
};
