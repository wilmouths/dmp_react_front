import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: '20px',
  minWidth: '425px',
  minHeight: '124px',
  borderRadius: '5px',
  alignSelf: 'flex-end',
  display: 'grid',
  gridTemplateColumns: '5fr 0.1fr',
  color: 'white',
  position: 'absolute',
  top: '475px',
  right: '220px',
  textAlign: 'left',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  }
}));

const VideoPlayer: React.FC = () => {
  return (
    <video
      poster="https://www.canal-u.tv/sites/default/files/medias/images/video-vignette-surcharge/2024/03/DMPOPIDOR.png"
      preload="metadata"
      controls
      width="700"
      style={{ borderRadius: '5px' }}
    >
      <source
        src="https://vod.canal-u.tv/hls/2024/03/97193/3min_dmp_opidor_final_1080.mp4,.urlset/master.m3u8"
        type="application/x-mpegURL"
        label="1080p"
        res="1080"
      />
      <source
        src="https://vod.canal-u.tv/hls/2024/03/97193/3min_dmp_opidor_final_480.mp4,.urlset/master.m3u8"
        type="application/x-mpegURL"
        label="480p"
        res="480"
      />
      <source
        src="https://vod.canal-u.tv/hls/2024/03/97193/3min_dmp_opidor_final_240.mp4,.urlset/master.m3u8"
        type="application/x-mpegURL"
        label="240p"
        res="240"
      />
      <source
        src="/media/97193/ressource/podcast"
        type="audio/mp3"
        label="audio"
        res="1"
      />
      <source
        src="https://vod.canal-u.tv/hls/2024/03/97193/3min_dmp_opidor_final_1080.mp4,.urlset/master.m3u8, https://vod.canal-u.tv/hls/2024/03/97193/3min_dmp_opidor_final_480.mp4,.urlset/master.m3u8, https://vod.canal-u.tv/hls/2024/03/97193/3min_dmp_opidor_final_240.mp4,.urlset/master.m3u8"
        type="application/x-mpegURL"
        label="auto"
        res="0"
        selected={true}
      />
    </video>
  );
};

function FirstVisit() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '765px',
          heigth: 'auto',
          bgcolor: 'background.paper',
          borderRadius: '5px',
          boxShadow: 24,
          p: 4,
        }}>
          <VideoPlayer />
        </Box>
      </Modal>
      <StyledButton onClick={handleOpen}>
        <div style={{ textTransform: 'none' }}>
          <Typography variant="h6" gutterBottom>
            {t('hero.firstVisit.title')}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {t('hero.firstVisit.content')}
          </Typography>
        </div>
        <PlayCircleIcon style={{ fontSize: '56px' }} />
      </StyledButton>
    </>
  );
}

export default FirstVisit;