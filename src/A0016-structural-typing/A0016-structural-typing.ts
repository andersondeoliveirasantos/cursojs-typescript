type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const VerifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Anderson', password: '123456' };
const sentUser = { username: 'Daniela', password: '123456' };
const loggedIn = VerifyUser(bdUser, sentUser);

console.log(loggedIn);
