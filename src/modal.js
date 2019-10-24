import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width:window.innerWidth*0.5+'px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default function SpringModal(props) {
    console.log(window.innerWidth)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" id="buttons" onClick={handleOpen}>
        Read More...
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div  className={classes.paper}>
            <h2 className="headerT" id="spring-modal-title">{props.content.title}</h2>
            <p id="spring-modal-description"><span class="attributes">Stipend: </span>{props.content.stipend}.</p>
            <p id="spring-modal-description"><span class="attributes">Location: </span>{props.content.location}.</p>
            <p id="spring-modal-description"><span class="attributes">Duration: </span>{props.content.duration}.</p>
            <p id="spring-modal-description"><span class="attributes">Requirements: </span>{props.content.requirement}.</p>
            <p id="spring-modal-description"><span class="attributes">Description: </span>{props.content.description}.</p>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}