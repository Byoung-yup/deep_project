import axiosMBTIInstance from "./axiosMBTIInstance";

export const createTestResult = async (result) => {
  await axiosMBTIInstance.post("", result);
};

export const fetchMBTIDATA = async (userId = null) => {
  const response = userId
    ? await axiosMBTIInstance.get(`?email=${userId}`)
    : await axiosMBTIInstance.get("");
  return response.data;
};

export const deleteMBTIDATA = async (id) => {
  await axiosMBTIInstance.delete(`/${id}`);
};

export const updateMBTIDATA = async ({ id, status }) => {
  console.log(id, status);
  await axiosMBTIInstance.patch(`/${id}`, {
    visibility: !status,
  });
};
