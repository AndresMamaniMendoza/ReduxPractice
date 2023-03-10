export default function courseReducer(state = [], action) {
  // Define un reducer que recibe el estado actual y una acción, y devuelve el nuevo estado.
  console.log('Step2: Defining reducers...');
  
  switch(action.type) {
      case "CREATE_COURSE":
        return [...state, { ...action.course }];
        
      case "DELETE_COURSE":
        return state.filter((course) => course.title !== action.payload);

      default:
        return state;
  }
}
