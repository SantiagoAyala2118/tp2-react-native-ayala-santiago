import Loading from "./Loading";

const ModalLoading = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(6,20,27,0.92)", backdropFilter: "blur(6px)" }}
    >
      <div className="bg-[#11212D] border border-[#253745] rounded-2xl w-[420px] max-w-[95vw] flex items-center justify-center h-40">
        <Loading />
      </div>
    </div>
  );
};

export default ModalLoading;
