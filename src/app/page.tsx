"use client"
import CardContainer from "@/components/CardContainer"
import useGetYouTubeVideosList from "@/hooks/useGetYouTubeVideosList";

export default function Home() {
  const { videos } = useGetYouTubeVideosList()
  console.log(videos);

  return (
    // <CardContainer videosList={videosList} />
    <>
      the
    </>
  )
}

