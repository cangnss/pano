import { FC, useEffect, useState } from "react";
import { formatTimeAgo } from "../features/utils/format-time-ago";

export const Timeago: FC<{ date: Date }> = ({ date }) => {
  const [timeAgo, setTimeAgo] = useState(formatTimeAgo(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeAgo(formatTimeAgo(date));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <>{timeAgo}</>;
};