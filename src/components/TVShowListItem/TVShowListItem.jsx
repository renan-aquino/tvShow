import { SMALL_IMG_BACKDROP_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div className={s.container} onClick={() => onClick(tvShow)}>
      <img
        alt={tvShow.name}
        className={s.image}
        src={SMALL_IMG_BACKDROP_BASE_URL + tvShow.backdrop_path}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}
