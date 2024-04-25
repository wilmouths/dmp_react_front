import * as React from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import { useQuery } from '@tanstack/react-query'
import Stack from '@mui/material/Stack'

import axios from '../utils/axios'
import Grid from '@mui/material/Grid'

export const Route = createFileRoute('/')({
  component: Home,
})

const SkeletonNews: React.FC<{ size?: number }> = ({ size = 3 }) => {
  const cards: JSX.Element[] = [];
  for (let i = 0; i < size; i++) {
    cards.push(
      <Grid item xs={12} sm={6} md={4}>
        <Card key={i}>
          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
          <CardContent>
            <Skeleton animation="wave" height={30} width="100%" style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="100%" />
          </CardContent>
          <CardActions>
            <Skeleton animation="wave" height={30} width="30%" style={{ marginLeft: 10 }} />
          </CardActions>
        </Card>
      </Grid>
    );
  }
  return cards;
}

interface Article {
  title: {
    rendered: string;
  }
  content: {
    rendered: string;
  }
  link: string;
}

const DisplayArticle: React.FC<{ articles: Array<Article> }> = ({ articles }): Array<JSX.Element> => {
  const { t } = useTranslation();

  return articles.map((article) => (<Grid item xs={12} sm={6} md={4}>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <CardMedia
          component="img"
          alt={article.title.rendered}
          height="240"
          image={article?.['_embedded']?.['wp:featuredmedia']?.at(0)?.['media_details']?.['sizes']?.['full']?.source_url}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' }}>
          <Typography gutterBottom component="div">
            {article.title.rendered}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div dangerouslySetInnerHTML={{ __html: `${article.content.rendered.substring(0, 120)}...` }} />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={article.link} target="_blank">{t('news.readMore')}</Button>
        </CardActions>
      </Card>
    </div>
  </Grid>));
};

function Home() {
  const { t } = useTranslation();

  const { isPending, error, data } = useQuery({
    queryKey: ['news'],
    queryFn: () =>
      axios.get('https://opidor.fr/wp-json/wp/v2/posts?per_page=3&categories=5&_embed')
      .then((res) => res.data),
  })

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="p-2">
      <h1>{t('news.title')}</h1>
      <Grid container spacing={2}>
        {isPending ? <SkeletonNews size={3} /> : <DisplayArticle articles={data} />}
      </Grid>
    </div>
  )
}
