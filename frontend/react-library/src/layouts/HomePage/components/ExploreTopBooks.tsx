import { Link } from "react-router-dom";

export const ExploreTopBooks = () => {
  return (
    <div className="p-5 mb-4 bg-dark header">
      <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
        <div>
          <h1 className="display-4 fw-bold">Yeni Maceralara Atıl</h1>
          <p className="col-md-8 fs-4">Merak ediyor musun?</p>
          <Link
            type="button"
            className="btn main-color btn-lg text-white"
            to={"/search"}
          >
            En Popüler Kitapları Keşfedin
          </Link>
        </div>
      </div>
    </div>
  );
};
