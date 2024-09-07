import userLogo from "../../assets/user01.png";

function User() {
  return (
    <div className="flex gap-3 items-center bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300">
      <img src={userLogo} alt="user Image" className="w-14 h-14 rounded-full" />
      <div>
        <h3 className="font-semibold text-2xl">Abdul Vahab</h3>
        <p className="font-semibold">Developer</p>
      </div>
    </div>
  );
}

export default User;
