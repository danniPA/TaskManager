import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const url = 'https://64cfa39effcda80aff520eef.mockapi.io/TablesData';

/*{name:"Table 0",id:0,tasks:[{}]}*/

const initialState = {
  tables: [],
  activeTable:{/*{name:"Table 0",id:0,tasks:[{}]*/}
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addNewTable(state, action){
      state.tables.push({name:action.payload,id:state.tables.length+1,tasks:[]});
    },
    setActiveTable(state, action){
      state.activeTable = action.payload;
    },
    addNewTask(state, action){
      state.activeTable.tasks.push({name:action.payload,done:false,deleted:false});
      const filtered = state.tables.filter((table) => table.id === state.activeTable.id);

      if (filtered.length > 0) {
        if (filtered[0].tasks) {
          filtered[0].tasks.push({ name: action.payload, done: false, deleted: false });
        } else {
          filtered[0].tasks = [{ name: action.payload, done: false, deleted: false }];
        }
      }
    },
    setTaskDone(state, action){
      const filtered = state.tables.filter((table) => table.id === state.activeTable.id);
      if (filtered.length > 0) {
        if (filtered[0].tasks) {
          filtered[0].tasks[action.payload].done = !state.activeTable.tasks[action.payload].done;
        } else {
          filtered[0].tasks[action.payload].done = !state.activeTable.tasks[action.payload].done;
        }
      }
      state.activeTable.tasks[action.payload].done = !state.activeTable.tasks[action.payload].done;
    },
    deleteTask(state, action){
      const filtered = state.tables.filter((table) => table.id === state.activeTable.id);
      if (filtered.length > 0) {
        if (filtered[0].tasks) {
          filtered[0].tasks[action.payload].deleted = true;
        } else {
          filtered[0].tasks[action.payload].deleted = true;
        }
      }
      state.activeTable.tasks[action.payload].deleted = true;
    },
    setTables(state, action) {
      state.tables = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNewTable,setActiveTable,addNewTask,setTaskDone,deleteTask,setTables } = tableSlice.actions

export default tableSlice.reducer
