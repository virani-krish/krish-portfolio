const NotFoundPage = ({ onGoHome, onGoWork }) => {
  return (
    <main className="not-found-page">
      <section className="not-found-section">
        <div className="container">
          <div className="divider not-found-divider"></div>
          <p className="not-found-code">404</p>
          <h1 className="not-found-title">Page not found.</h1>
          <p className="not-found-copy">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div className="not-found-actions">
            <button type="button" className="not-found-btn" onClick={onGoHome}>
              Go to Home
            </button>
            <button
              type="button"
              className="not-found-btn not-found-btn-dark"
              onClick={onGoWork}
            >
              View Work
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
