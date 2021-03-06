import * as types from 'constants/actionsConstants'
import reducer from 'redux/reducers/reducerProfileInformation'

describe('reducer Profile Information', () => {

    describe('Initial state', () => {
        beforeEach(function () {
            this.initialState = reducer(undefined, {})
        });

        it('State in field errorEmail', function () {
            expect(this.initialState.login).toBe('');
        });

        it('State in field errorLogin', function () {
            expect(this.initialState.name).toBe('');
        });

        it('State in field errorPassword', function () {
            expect(this.initialState.surname).toBe('');
        });

        it('State in field errorPassword', function () {
            expect(this.initialState.email).toBe('');
        });

        it('State in field errorPassword', function () {
            expect(this.initialState.password).toBe('');
        });

        it('State in field errorPassword', function () {
            expect(this.initialState.confirmPassword).toBe('');
        });

        it('State in field dataOfRegistration', function () {
            expect(this.initialState.dataOfRegistration).toBe('');
        });

        it('State in field userId', function () {
            expect(this.initialState.userId).toBe(undefined);
        });

        it('State in field errorEmail', function () {
            expect(this.initialState.errorEmail).toBe(undefined);
        });

        it('State in field errorPassword', function () {
            expect(this.initialState.errorPassword).toBe(undefined);
        });

        it('State in field errorConfirmPassword', function () {
            expect(this.initialState.errorConfirmPassword).toBe(undefined);
        });

        it('State in field success', function () {
            expect(this.initialState.success).toBe(false);
        });

        it('State in field isOpen', function () {
            expect(this.initialState.isOpen).toBe(false);
        });
    });

    describe('Action: RECEIVE_INFORMATION ', () => {

        beforeEach(function () {
            this.info = {
                login: 'Login',
                name: 'Name',
                surname: 'Surname',
                sex: 'Sex',
                email: 'Email',
                password: 'Password',
                createdAt: 'Data',
                userId: 'User ID'
            };
            this.createAction = (information) => ({type: types.RECEIVE_INFORMATION, payload: information})
        });

        it('should set info.login in field login after action RECEIVE_INFORMATION', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.login).toBe(this.info.login);
        });

        it('should set info.name in field name after action RECEIVE_INFORMATION', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.name).toBe(this.info.name);
        });

        it('should set info.surname in field surname after action RECEIVE_INFORMATION', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.surname).toBe(this.info.surname);
        });

        it('should set info.sex in field sex after action RECEIVE_INFORMATION', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.sex).toBe(this.info.sex);
        });

        it('should set info.email in field email after action RECEIVE_INFORMATION', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.email).toBe(this.info.email);
        });

        it('should set info.password in field password after action RECEIVE_INFORMATION', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.password).toBe(this.info.password);
        });

        it('should set info.confirmPassword in field confirmPassword after action RECEIVE_INFORMATION', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.confirmPassword).toBe(this.info.password);
        });

        it('should set info.dataOfRegistration in field dataOfRegistration after action RECEIVE_INFORMATION', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.dataOfRegistration).toBe(this.info.createdAt);
        });

        it('should set info.userId in field userId after action RECEIVE_INFORMATION', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.userId).toBe(this.info.userId);
        });
    });

    describe('Action: PROFILE_EDIT_SUCCESS ', () => {

        beforeEach(function () {
            this.info = {
                name: 'Name',
                surname: 'Surname',
                sex: 'Sex',
                email: 'Email',
                password: 'Password',
            };
            this.createAction = (information) => ({type: types.PROFILE_EDIT_SUCCESS, payload: information})
        });

        it('should set info.name in field name after action PROFILE_EDIT_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.name).toBe(this.info.name);
        });

        it('should set info.surname in field surname after action PROFILE_EDIT_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.surname).toBe(this.info.surname);
        });

        it('should set info.sex in field sex after action PROFILE_EDIT_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.sex).toBe(this.info.sex);
        });

        it('should set info.email in field email after action PROFILE_EDIT_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.email).toBe(this.info.email);
        });

        it('should set info.password in field password after action PROFILE_EDIT_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.password).toBe(this.info.password);
        });

        it('should set info.confirmPassword in field confirmPassword after action PROFILE_EDIT_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.confirmPassword).toBe(this.info.password);
        });

        it('should set info.userId in field userId after action RECEIVE_INFORMATION', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.success).toBe(true);
        });
    });

    describe('Action: PROFILE_EDIT_FAILURE ', () => {

        beforeEach(function () {
            this.info = ['Error im email', 'Error in password', 'Error in confirm password'];
            this.createAction = (information) => ({type: types.PROFILE_EDIT_FAILURE, payload: information})
        });

        it('should set error in field errorEmail after action PROFILE_EDIT_FAILURE', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.errorEmail).toBe(this.info[0]);
        });

        it('should set info.surname in field surname after action PROFILE_EDIT_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.errorPassword).toBe(this.info[1]);
        });

        it('should set info.sex in field sex after action PROFILE_EDIT_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.errorConfirmPassword).toBe(this.info[2]);
        });
    });

    describe('Action: RESET_SUCCESS ', () => {
        it('should set false in field success after action RESET_SUCCESS', function () {
            this.createAction = () => ({type: types.RESET_SUCCESS});

            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter.success).toBe(false);
        });
    });

    describe('Action: OPEN_MODAL ', () => {
        it('should set true in field isOpen after action OPEN_MODAL', function () {
            this.createAction = () => ({type: types.OPEN_MODAL});

            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter.isOpen).toBe(true);
        });
    });

    describe('Action: CLOSE_MODAL ', () => {
        it('should set false in field isOpen after action OPEN_MODAL', function () {
            this.createAction = () => ({type: types.CLOSE_MODAL});

            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter.isOpen).toBe(false);
        });
    });
});