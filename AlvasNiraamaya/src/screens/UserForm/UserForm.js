const {CustomeInput} = require('../../components');
<>
  <CustomeInput
    placeholder="Username"
    name="Username"
    control={control}
    rules={{
      required: 'Username is required',
      minLength: {
        value: 4,
        message: 'Username should be minimum 4 characters long',
      },
      maxLength: {
        value: 20,
        message: 'Username should be maximum 20 characters long',
      },
    }}
  />
  <CustomeInput
    placeholder="Phone Number"
    control={control}
    name="Phone Number"
    rules={{
      required: 'Phone Number is required',
      minLength: {
        value: 10,
        message: 'Phone Number should be minimum 10 characters long',
      },
      maxLength: {
        value: 10,
        message: 'Phone Number should be maximum 10 characters long',
      },
    }}
  />
</>;
