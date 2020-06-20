const getUser = () => ({
  uid: 'ABC123',
  username: 'joalbertgonzalez@gmail.com'
});

const getActiveUser = ( name ) =>({
    uid: 'ABC567',
    username: name
})

export {
  getUser as default,
  getActiveUser
};

